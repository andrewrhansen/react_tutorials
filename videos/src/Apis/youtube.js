import Axios from "axios";

const KEY = "AIzaSyD9fBb3-6Kls3rPW1bUhkIzQ6lciDz3neY";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
