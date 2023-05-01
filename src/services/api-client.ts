/* Base URL and key for communicating with rawg API. 
Uses axios.create() to generate an axios instance to 
communicate with the API. */

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "979b4f88ce994d909ff84fd2bfccaf06",
  },
});
