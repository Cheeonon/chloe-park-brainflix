import Comments from '../Comments/Comments';
import VideoDescription from '../VideoDescription/VideoDescription';
import './Video.scss';

const Video = () => {
  return (
    <section className="video">
        <div className="video__container">
            <video 
                poster="https://i.imgur.com/l2Xfgpl.jpg" 
                controls
                className="video__player"> 
            </video>    
        </div>
        <VideoDescription />
        <Comments />
    </section>
  )
}

export default Video