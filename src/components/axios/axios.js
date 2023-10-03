import axios from "axios";

/* Main Address */
const API_URL = `https://assignment.dev.buttercorp.kr/v3/api-docs/v1-definition`; // 서버 주소

/* Sign-up */
axios
  .post(`${API_URL}/api/v1/assignment/sign-up`, {
    userid: "",
    password: "",
    userName: "",
    email: "",
    mobile: "",
  })
  .then();

/* Sign-in */
axios.post(`${API_URL}/api/v1/assignment/sign-in`, {});

/* Get-Info API */
axios
  .get(`${API_URL}/api/v1/assignment/get-info`, {
    timestamp: "",
    status: integer(int32),
    result: {
      imgUrl: "",
      text: "",
    },
    message: "",
  })
  .then();

/* Sign-up */
axios({
  method: "post",
  url: `${API_URL}/api/v1/assignment/sign-up`,
  data: {
    userid: "",
    password: "",
    userName: "",
    email: "",
    mobile: "",
  },
})
  .then((result) => {
    console.log("Swagger 확인");
    console.log(result);
    setArray(result.data);
  })
  .catch((error) => {
    console.log("Swagger API 요청 실패");
    console.log(error);
  });

/* Get-Info API */
axios({
  method: "get",
  url: `${API_URL}/api/v1/assignment/get-info`,
  data: {
    timestamp: "",
    status: integer(int32),
    result: {
      imgUrl: "",
      text: "",
    },
    message: "",
  },
});

/* Sign-in */
//  Get-Info API 를 요쳥으로 받아와서 응답폼으로 실행
axios({
  method: "post",
  url: `${API_URL}/api/v1/assignment/sign-in`,
  data: {
    Authorization: access - token,
    info: { id: ``, pw: `` },
    response: response,
  }, // 액세스 토큰 받아와서 진행
});
