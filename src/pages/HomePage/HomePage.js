import { useEffect, useState } from "react";
import { fetchVideos, fetchVideoWithId } from "../../utils/axiosVideo";
import Video from "../../components/Video/Video";
import { useParams } from 'react-router-dom';

const HomePage = () => {
    const [videos, setVideos] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { videosId } = useParams();

    // get data from server
    useEffect(() => {
        fetchVideos().then((resolve) => {
            setVideos(resolve.data);
            const currentVideoId = videosId || resolve.data[0].id;

            return fetchVideoWithId(currentVideoId);
        })
        .then(resolve => {
          setCurrentVideo(resolve.data);
        })
    }, [videosId]);

    // scroll to top when a video is changed
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [currentVideo]);

    // wait until receiving data and get the image url
    if (!currentVideo) {
        return null;
    }

    return (
        <Video currentVideo={currentVideo} videos={videos}/>
    );
};

export default HomePage