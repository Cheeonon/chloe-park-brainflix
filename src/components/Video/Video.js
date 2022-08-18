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
    </section>
  )
}

export default Video