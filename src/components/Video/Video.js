// components and scss
import Comments from '../Comments/Comments';
import NextVideos from '../NextVideos/NextVideos';
import VideoDescription from '../VideoDescription/VideoDescription';
import './Video.scss';

import {useState} from 'react';

// data
import videos from '../../data/videos.json';
import videosDetail from '../../data/video-details.json';

const Video = () => {

const [currentVideo, setCurrentVideo] = useState(videosDetail[1]);
const currentVideoImgUrl = currentVideo.image;
const changeCurrentVideo = (video) => {

  // scroll to the selected video player
  document.querySelector(".video__player").scrollIntoView({behavior: "smooth"});
  videosDetail.forEach(videoDetail => {
    if(video.id === videoDetail.id){
      setCurrentVideo(videoDetail);
    }
  })

}

  return (
    <section className="video">
        <div className="video__video-container">
            <video 
                poster={currentVideoImgUrl}
                controls
                className="video__player"> 
            </video>    
        </div>
        <div className="video__content-container">
          <div className="video__content">
            <VideoDescription currentVideo={currentVideo}/>
            <Comments comments={currentVideo.comments}/>
          </div>
          <div className="video__side">
            <NextVideos videos={videos} currentVideo={currentVideo} changeCurrentVideo={changeCurrentVideo} />  
          </div>
        </div>
    </section>
  )
}

export default Video