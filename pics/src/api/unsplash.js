import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ef3cf73e091ba2d620b8eb685fe28a04b541410000909915a1fe741260a17f08"
  }
});
