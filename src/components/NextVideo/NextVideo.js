import './NextVideo.scss';

const NextVideo = (video) => {
  const imgUrl = video.video.image;

  return (
    <div className="next-video">
        <img src={imgUrl} alt="" className="next-video__image" />
        <div className="next-video__info">
            <h3 className="next-video__title">{video.video.title}</h3>
            <span className="next-video__channel">{video.video.channel}</span>
        </div>
    </div>
  )
}

export default NextVideo