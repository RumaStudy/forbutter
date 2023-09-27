import React from "react";
import GNB from "./GNB";

const CompanyInfo = () => {
  return (
    <main className="CompanyInfo">
      <div className="inner">
        <GNB />
        <div className="flexBox">
          <div className="flexLeft">
            <span className="engSlogun">
              <h1>HIGH-END CAR</h1>
              <h1>STORE</h1>
            </span>
            <span className="koSlogun">
              <h3>하이엔드 직수입, 구매부터 튜닝까지</h3>
              <h3>고객의 요구에 맞춘 최상의 서비스를 제공합니다.</h3>
            </span>
            <button>VIEW MORE</button>
          </div>
          <div className="flexRight"></div>
        </div>
      </div>
    </main>
  );
};

export default CompanyInfo;
