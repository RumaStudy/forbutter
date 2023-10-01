import React from "react";
import xbtn from "./img/xbtn.svg";

const Login = (props) => {
  return (
    <section className="loginBox">
      <img
        src={xbtn}
        alt="close_button"
        onClick={() => {
          props.setLoginState(false);
        }}
      />
      <h2>Login</h2>
      <form action="post">
        <input type="text" name="login" id="userId" />
        <input type="text" name="login" id="pw" />
        <div className="formBtnWrap">
          <input type="submit" value="Sign in" />
          <span></span>
          <button
            className=""
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
