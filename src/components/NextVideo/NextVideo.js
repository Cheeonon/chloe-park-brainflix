import './NextVideo.scss';

const NextVideo = ({video, handleCurrentVideo}) => {
  const imgUrl = video.image;

  return (
    <div className="next-video" onClick={()=>{handleCurrentVideo(video)}}>
        <img src={imgUrl} alt={video.title} className="next-video__image" />
        <div className="next-video__info">
            <h3 className="next-video__title">{video.title}</h3>
            <span className="next-video__channel">{video.channel}</span>
        </div>
    </div>
  )
}

export default NextVideo