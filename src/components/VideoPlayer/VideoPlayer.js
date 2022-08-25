import "./VideoPlayer.scss";

const VideoPlayer = ({currentVideo}) => {
    const currentVideoImgUrl = currentVideo.image;

    return (
        <div className="video__video-container">
            <video
                poster={currentVideoImgUrl}
                controls
                className="video__player"
            ></video>
        </div>
    );
};

export default VideoPlayer;
