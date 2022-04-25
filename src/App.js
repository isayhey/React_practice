import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [글제목, 글제목변경] = useState(["남자코트 추천", "여자코트 추천", "남자팬티 추천"]);
  const [따봉, 따봉변경] = useState(0);

  // function 제목바꾸기(){
  //    const newArray = [...글제목];
  //    newArray[0] = "여자코트 추천"
  //    글제목변경( newArray );
  //  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>4월 24일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>4월 24일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>4월 24일 발행</p>
        <hr/>
      </div>
      
      <Modal />

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}



export default App;
