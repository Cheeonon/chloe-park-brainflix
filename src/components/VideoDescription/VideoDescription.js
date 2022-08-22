import './VideoDescription.scss'
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

const VideoDescription = ({currentVideo}) => {
    const date = new Date(currentVideo.timestamp).toDateString();

  return (
    <div className="video-desc">
        <h1 className="video-desc__title">{currentVideo.title}</h1>
        <div className="video-desc__info">
            <div className="video-desc__info-section">
                <span className="video-desc__channel video-desc__info--first">{currentVideo.channel}</span>
                <span>{date}</span>
            </div>
            <div className="video-desc__info-section">
                <span className="video-desc__info--first">
                    <img className="video-desc__icon" src={views} alt="" />
                    {currentVideo.views}
                </span>  
                <span>
                    <img className="video-desc__icon" src={likes} alt="" />
                    {currentVideo.likes}
                </span>
            </div>
        </div>
        <p className="video-desc__body">
            {currentVideo.description}
        </p>
    </div>
  )
}

export default VideoDescription