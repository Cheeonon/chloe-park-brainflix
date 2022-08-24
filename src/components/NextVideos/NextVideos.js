import NextVideo from "../NextVideo/NextVideo"
import './NextVideos.scss';

const NextVideos = ({videos, handleCurrentVideo, currentVideo}) => {
  return (
    <div className="next-videos">
        <h2 className="next-videos__title">Next Videos</h2>
        
        {/* display except the one is selected */}
        {videos.map((video, index)=> {
          if(video.id == currentVideo.id){
            return;
          }
          return( 
          <NextVideo key={index} video={video} handleCurrentVideo={handleCurrentVideo}/>
          )
        }
        )}
    </div>
  )
}

export default NextVideos