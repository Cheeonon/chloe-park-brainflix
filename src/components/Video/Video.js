// components and scss
import Comments from '../Comments/Comments';
import NextVideos from '../NextVideos/NextVideos';
import VideoDescription from '../VideoDescription/VideoDescription';
import './Video.scss';

import {useEffect, useState} from 'react';

// data
import videos from '../../data/videos.json';
import videosDetail from '../../data/video-details.json';
import axios from 'axios';

const Video = () => {

const url = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=749826da-ca91-4ecf-8de9-011f3cb7e24e";

const [currentVideo, setCurrentVideo] = useState(null);

useEffect(()=>{
  axios.get(url + "/videos" + apiKey)
  .then(resolve => {
    const currentVideoId = resolve.data[0].id;
    
    axios.get(url + "/videos/" + currentVideoId + apiKey)
    .then(resolve => {
      setCurrentVideo(resolve.data);
    })
  })
}, []);

// wait until receiving data and get the image url
if (!currentVideo) {
  return null
}
const currentVideoImgUrl = currentVideo.image;

const handleCurrentVideo = (video) => {
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
            <NextVideos videos={videos} currentVideo={currentVideo} handleCurrentVideo={handleCurrentVideo} />  
          </div>
        </div>
    </section>
  )
}

export default Video