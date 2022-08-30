import NextVideo from "../NextVideo/NextVideo"
import './NextVideoSection.scss';

// renders nextvideos
const NextVideos = ({videos, currentVideo}) => {
  return (
    <div className="next-videos">
        <h2 className="next-videos__title">Next Videos</h2>
        
        {/* display except the one is selected */}
        {videos.map((video, index)=> {
          if(video.id === currentVideo.id){
            return null;
          }
          return( 
          <NextVideo key={index} video={video}/>
          )
        }
        )}
    </div>
  )
}

export default NextVideos