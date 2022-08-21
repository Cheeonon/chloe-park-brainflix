import Comments from '../Comments/Comments';
import NextVideos from '../NextVideos/NextVideos';
import VideoDescription from '../VideoDescription/VideoDescription';
import './Video.scss';

const Video = () => {
  return (
    <section className="video">
        <div className="video__video-container">
            <video 
                poster="https://i.imgur.com/l2Xfgpl.jpg" 
                controls
                className="video__player"> 
            </video>    
        </div>
        <div className="video__content-container">
          <div className="video__content">
            <VideoDescription />
            <Comments />
          </div>
          <div className="video__side">
            <NextVideos />  
          </div>
        </div>
    </section>
  )
}

export default Video