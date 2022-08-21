import NextVideo from "../NextVideo/NextVideo"
import './NextVideos.scss';

const NextVideos = () => {
  return (
    <div className="next-videos">
        <h2 className="next-videos__title">Next Videos</h2>
        <NextVideo />
        <NextVideo />
        <NextVideo />
        <NextVideo />
        <NextVideo />
    </div>
  )
}

export default NextVideos