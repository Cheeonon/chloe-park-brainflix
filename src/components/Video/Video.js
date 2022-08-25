import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDescription from '../VideoDescription/VideoDescription';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';


const Video = ({ videos, currentVideo }) => {

  return (
    <section className="video">
        <VideoPlayer currentVideo={currentVideo} />
        <div className="video__content-container">
            <div className="video__content">
                <VideoDescription currentVideo={currentVideo} />
                <Comments comments={currentVideo.comments} />
            </div>
            <div className="video__side">
                <NextVideos
                    videos={videos}
                    currentVideo={currentVideo}
                />
            </div>
        </div>
    </section>
);
}

export default Video