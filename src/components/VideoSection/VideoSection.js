import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDescription from '../VideoDescription/VideoDescription';
import NextVideoSection from '../NextVideoSection/NextVideoSection';
import CommentSection from '../CommentSection/CommentSection';
import './VideoSection.scss';


const Video = ({ videos, currentVideo }) => {
// renders every section for the page

  return (
    <section className="video">
        <VideoPlayer currentVideo={currentVideo} />
        <div className="video__content-container">
            <div className="video__content">
                <VideoDescription currentVideo={currentVideo} />
                <CommentSection comments={currentVideo.comments} />
            </div>
            <div className="video__side">
                <NextVideoSection
                    videos={videos} 
                    currentVideo={currentVideo}
                />
            </div>
        </div>
    </section>
);
}
 
export default Video