import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "979b4f88ce994d909ff84fd2bfccaf06",
  },
});
