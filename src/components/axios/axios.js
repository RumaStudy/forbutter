import axios from "axios";

/* Main Address */
const API_URL = `https://assignment.dev.buttercorp.kr/v3/api-docs/v1-definition`;

/* Sign-up */
axios.post(`${API_URL}/api/v1/assignment/sign-up`, {
  userid: "",
  password: "",
  userName: "",
  email: "",
  mobile: "",
});

/* Sign-in */
axios.post(`${API_URL}/api/v1/assignment/sign-in`, {});

/* Get-Info API */
axios.get(`${API_URL}/api/v1/assignment/get-info`, {
  timestamp: "",
  status: integer(int32),
  result: {
    imgUrl: "",
    text: "",
  },
  message: "",
});
