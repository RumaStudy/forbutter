import "./App.css";
import { useState } from "react";
import MainBanner from "./components/MainBanner";
import CompanyInfo from "./components/CompanyInfo";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  return (
    <div className="App">
      {loginState ? (
        <Login
          loginState={loginState}
          setLoginState={setLoginState}
          setSignUpState={setSignUpState}
        />
      ) : (
        <></>
      )}
      {signUpState ? <SignIn setSignUpState={setSignUpState} /> : <></>}
      <MainBanner setLoginState={setLoginState} />
      <CompanyInfo />
    </div>
  );
}

export default App;
