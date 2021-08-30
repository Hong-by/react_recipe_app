import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from './components/Header';


import "./css/App.css";
import "./css/reset.css"
import Recipe from "./components/Recipe";

const App = () => {

  //1. 계정 등록
  const App_ID = "488923a7";
  const App_Key = "e7aaf5d53c8f67557e24668c725dbe5f";

  // 4. recipes 요청 결과 데이터 useState 정의
  const [recipes, setRecipes] = useState([]);

  // 5. useEffect 정의
  useEffect(() => {
    getRecipes();
  }, []);

  // "https://api.edamam.com/search?q=chicken&app_id=488923a7&app_key=e7aaf5d53c8f67557e24668c725dbe5f"


  //3. API 비동기 연결(axios)
  //axios 설치 : https://velog.io/@sss5793/axios-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-uuk5elxk88
  //axios 사용 : https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj

  const getRecipes = () => {
    axios
      .get(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_Key}`)
      .then((res) => {
        //useEffect의 콜백 파라미터에 []를 사용하지 않으면 콘솔에 계속 찍히다가 오류가 난다.
        console.log(res.data.hits);
        setRecipes(res.data.hits);
      });
  }


  return (
    <div className="App">
      <Header />

      {/* 2. 검색창 UI 작성 */}
      <form className="search-form">
        <div className="center">
          <input type="text" placeholder="Search Recipe..." />
          <button><i className="fa fa-search"></i></button>
        </div>
      </form>

      {/* 7. recipe 컴포넌트 작성 및 임포트 */}
      <div className="recipes">
        <Recipe />
      </div>
    </div>
  );
};

export default App;