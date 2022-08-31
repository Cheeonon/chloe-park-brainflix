import axios from 'axios';

const url = process.env.REACT_APP_UPI_URL;
// comments out every api key as we don't need it for our api
// const apiKey = "?api_key=749826da-ca91-4ecf-8de9-011f3cb7e24e";

export const fetchVideos = () => {
    // return axios.get(url + "/videos" + apiKey)
    return axios.get(url + "/videos")
}

export const fetchVideoWithId = (currentVideoId) => {
    // return axios.get(url + "/videos/" + currentVideoId + apiKey)
    return axios.get(url + "/videos/" + currentVideoId)
}

export const postVideo = (body) => {
    return axios.post(url + "/videos", {body})
}