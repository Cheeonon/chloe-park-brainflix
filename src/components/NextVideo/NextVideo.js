import { NavLink } from 'react-router-dom';
import './NextVideo.scss';

const NextVideo = ({video}) => {
  const imgUrl = video.image;

  return (
    <NavLink className="next-video" to={`/videos/${video.id}`}>
        <img src={imgUrl} alt={video.title} className="next-video__image" />
        <div className="next-video__info">
            <h3 className="next-video__title">{video.title}</h3>
            <span className="next-video__channel">{video.channel}</span>
        </div>
    </NavLink>
  )
}

export default NextVideo