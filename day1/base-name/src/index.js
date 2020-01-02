import React from 'react'; // 리액트와 그 내부의 Component 를 불러온다
import ReactDOM from 'react-dom';// ReactDOM을 불러온다
import Main from './components/Main';// components/Main파일을 불러온다

const mainEl = document.getElementById('main'); // id가 main인 DOM(<div id="main"></div>)를 mainEl변수에 저장
ReactDOM.render(<Main />, mainEl);// id가 main인 DOM을 찾아 <Main />에 렌더링한다.
