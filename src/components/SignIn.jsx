import React, { useState } from "react";
import xbtn from "./img/xbtn.svg";
import axios from "axios";

const SignIn = (props) => {
  /* SignIn States... */
  const [userIdState, setUserIdState] = useState("");
  const [pwState, setPwState] = useState("");
  const [reState, setReState] = useState("");
  const [nameState, setNameState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [mailState, setMailState] = useState("");
  const requiredInfo = [
    setUserIdState,
    setPwState,
    setReState,
    setNameState,
    setPhoneState,
    setMailState,
  ];

  const inputValueFixing = (e, setterFunction) => {
    typeof e.target.value === "string"
      ? setterFunction(e.target.value)
      : alert("해당 칸은 반드시 문자열로 작성해야합니다.");
  };
  const API_URL = `https://assignment.dev.buttercorp.kr/v3/api-docs/v1-definition`;
  const signInClick = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/v1/assignment/sign-up`, {
      userId: userIdState,
      password: pwState,
      userName: nameState,
      email: mailState,
      mobile: phoneState,
    });
  };
  return (
    <section className="signInSection">
      <img
        src={xbtn}
        alt="closeButton"
        className="closeBtn"
        onClick={(e) => {
          e.preventDefault();
          /* 입력정보 초기화 */
          requiredInfo.map((things) => {
            things("");
          });
          props.setSignUpState(false);
        }}
      />
      <h2>Sign up</h2>
      <div className="SignUpWrap">
        <h6 className="title">ID</h6>
        <input
          type="text"
          name=""
          id=""
          value={userIdState}
          onChange={(e) => {
            inputValueFixing(e, setUserIdState);
          }}
        />
        <h6 className="title">Password</h6>
        <input
          type="password"
          name=""
          id=""
          value={pwState}
          onChange={(e) => {
            inputValueFixing(e, setPwState);
          }}
        />
        <h6 className="title">Re-Enter</h6>
        <input
          type="password"
          name=""
          id=""
          value={reState}
          onChange={(e) => {
            inputValueFixing(e, setReState);
          }}
        />
        <h6 className="title">Name</h6>
        <input
          type="text"
          name=""
          id=""
          value={nameState}
          onChange={(e) => {
            inputValueFixing(e, setNameState);
          }}
        />
        <h6 className="title">E-mail</h6>
        <input
          type="text"
          name=""
          id=""
          value={phoneState}
          onChange={(e) => {
            inputValueFixing(e, setPhoneState);
          }}
        />
        <h6 className="title">Mobile</h6>
        <input
          type="text"
          name=""
          id=""
          value={mailState}
          onChange={(e) => {
            inputValueFixing(e, setMailState);
          }}
        />
      </div>
      <button className="SignInConfirm" onClick={signInClick}>
        Join Us
      </button>
    </section>
  );
};

export default SignIn;
