import { useEffect, useState } from "react";
import { fetchVideos, fetchVideoWithId } from "../../utils/axiosVideo";
import Video from "../../components/VideoSection/VideoSection";
import { useParams } from 'react-router-dom';
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
    const [videos, setVideos] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { videosId } = useParams();

    // get data from server
    useEffect(() => {
        fetchVideos().then((resolve) => {
            setVideos(resolve.data);
            const currentVideoId = videosId || resolve.data[0].id;

            return fetchVideoWithId((resolve)=>{
                        setCurrentVideo(resolve.data);
                    }, currentVideoId);
        })
    }, [videosId]);

    // scroll to top when a video is changed
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [currentVideo]);

    // wait until receiving data and get the image url
    if (!currentVideo) {
        return (
                <Loader />
        );
    } 

    return (
        <Video currentVideo={currentVideo} videos={videos}/>
    );
};

export default HomePage 