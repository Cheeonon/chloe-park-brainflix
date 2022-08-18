import './VideoDescription.scss'
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

const VideoDescription = () => {
  return (
    <div className="video-desc">
        <h1 className="video-desc__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video-desc__info">
            <div className="video-desc__info-section">
                <span className="video-desc__channel video-desc__info--first">By Red Crow</span>
                <span>07/11/2021</span>
            </div>
            <div className="video-desc__info-section">
                <span className="video-desc__info--first">
                    <img className="video-desc__icon" src={views} alt="" />
                    1,001,023
                </span>  
                <span>
                    <img className="video-desc__icon" src={likes} alt="" />
                    110,985
                </span>
            </div>
        </div>
        <p className="video-desc__body">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
        </p>
    </div>
  )
}

export default VideoDescription