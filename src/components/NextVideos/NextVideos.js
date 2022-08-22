import NextVideo from "../NextVideo/NextVideo"
import './NextVideos.scss';

const NextVideos = ({videos}) => {
  return (
    <div className="next-videos">
        <h2 className="next-videos__title">Next Videos</h2>
        {videos.map((video, index)=> <NextVideo key={index} video={video}/>
        )}
    </div>
  )
}

export default NextVideos