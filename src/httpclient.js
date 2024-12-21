import axios from "axios";

export default axios.create({
  withCredentials: true,//enabale cookies reception
});