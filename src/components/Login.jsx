import React, { useState } from "react";
import xbtn from "./img/xbtn.svg";

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
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign in
        </button>
        <span></span>
        <button
          className="signUp"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Login;
