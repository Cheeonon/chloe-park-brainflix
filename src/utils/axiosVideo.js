import axios from 'axios';

const url = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=749826da-ca91-4ecf-8de9-011f3cb7e24e";

export const fetchVideos = () => {
    return axios.get(url + "/videos" + apiKey)
}

export const fetchVideoWithId = (currentVideoId) => {
    return axios.get(url + "/videos/" + currentVideoId + apiKey)
}