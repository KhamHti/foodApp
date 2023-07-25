import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization: "Bearer oe0T_dkqqryLE4_vCRAJQDTH3R-VR4fyQxUVH5War5z6kXura0rjN7oF7yciT3W_gxP2BwVP2g5Bh2u1XAEEBDXcWdkSSJsRe44TZh1MfcnceUvKF0YGV_V2N-2_ZHYx"
  },
});