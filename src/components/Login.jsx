import React, { useState } from "react";
import xbtn from "./img/xbtn.svg";

/* Library & Framework */
import axios from "axios";

const API_URL =
  "https://assignment.dev.buttercorp.kr/v3/api-docs/v1-definition";

const Login = (props) => {
  /* ID & PW State */
  const [inputId, setInputId] = useState("");
  const [inputPW, setInputPW] = useState("");
  const IDCheckcer = (e) => {
    if (typeof e.target.value === "string") {
      setInputId(e.target.value);
    } else {
      alert("id는 문자열만 입력해야 합니다.");
      setInputId("");
    }
  };
  const PWChecker = (e) => {
    if (typeof e.target.value === "string") {
      setInputPW(e.target.value);
    } else {
      alert("pw는 문자열만 입력해야 합니다.");
      setInputPW("");
    }
  };

  /* Login Process */
  const [loginState, setLoginState] = useState(false);
  const signup = (e) => {
    e.preventDefault();
    /* ID, PW 최소요건 검사 */
    if (inputId.length === 0 || inputPW === 0) {
      alert("id와 pw는 반드시 입력해야합니다.");
    } else {
      /* i) 로그인 진행 후 응답 폼의 액세스 토큰을 헤더에 추가하여 'get-info' api 호출 */
      axios.get(API_URL);
      setLoginState(true);
    }
  };
  /* Main Components */
  return (
    <section className="loginBox">
      <img
        src={xbtn}
        alt="close_button"
        onClick={() => {
          props.setLoginState(false);
          /* Login 초기화 */
          setInputId("");
          setInputPW("");
        }}
      />
      <h2>Login</h2>
      <input
        type="text"
        name="login"
        id="userId"
        value={inputId}
        onChange={IDCheckcer}
      />
      <input
        type="password"
        name="login"
        id="userPw"
        value={inputPW}
        onChange={PWChecker}
      />
      <div className="formBtnWrap">
        <button
          className="signIn"
          onClick={() => {
            props.setLoginState(false);
            props.setSignUpState(true);
          }}
        >
          Sign in
        </button>
        <span></span>
        <button
          className={`signUp ${loginState ? "active" : ""}`}
          onClick={signup}
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Login;
