import axios from 'axios';

const url = process.env.REACT_APP_UPI_URL;
// comments out every api key as we don't need it for our api
// const apiKey = "?api_key=749826da-ca91-4ecf-8de9-011f3cb7e24e";

const errorCallback = (error) => {
    console.log(error)
}

export const fetchVideos = (callback) => {
    // return axios.get(url + "/videos" + apiKey)
    return axios.get(url + "videos")
    .then(callback)
    .catch(errorCallback)
}

export const fetchVideoWithId = (callback, currentVideoId) => {
    // return axios.get(url + "/videos/" + currentVideoId + apiKey)
    return axios.get(url + "videos/" + currentVideoId)
    .then(callback)
    .catch(errorCallback)
}

export const postVideo = (body) => {
    return axios.post(url + "videos", {body})
    .catch(errorCallback)
}