import "./App.css";
import { useState } from "react";
import MainBanner from "./components/MainBanner";
import CompanyInfo from "./components/CompanyInfo";
import Login from "./components/Login";

function App() {
  const [loginState, setLoginState] = useState(false);
  return (
    <div className="App">
      {loginState ? (
        <Login loginState={loginState} setLoginState={setLoginState} />
      ) : (
        <></>
      )}
      <MainBanner setLoginState={setLoginState} />
      <CompanyInfo />
    </div>
  );
}

export default App;
