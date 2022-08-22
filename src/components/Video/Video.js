// components and scss
import Comments from '../Comments/Comments';
import NextVideos from '../NextVideos/NextVideos';
import VideoDescription from '../VideoDescription/VideoDescription';
import './Video.scss';

import {useState} from 'react';

// data
import videos from '../../data/videos.json';
import videoDetail from '../../data/video-details.json';

const Video = () => {
  // console.log(videos); // for next videos
  // console.log(videoDetail); // for video details

// 처음엔 비디오랑 비디오디테일 id 비교 후 똑같으면 비디오디테일 불러오기

const [currentVideo, setCurrentVideo] = useState(videoDetail[1]);
const currentVideoImgUrl = currentVideo.image;


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
            <NextVideos videos={videos}/>  
          </div>
        </div>
    </section>
  )
}

export default Video