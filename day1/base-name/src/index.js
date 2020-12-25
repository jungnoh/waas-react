import React from 'react'; // react 모듈 import
import ReactDOM from 'react-dom'; // react-dom 모듈 import
import Main from './components/Main'; // components 디렉토리의 Main.jsx 파일 import

const mainEl = document.getElementById('main'); // render 할 DOM 할당
ReactDOM.render(<Main />, mainEl); // id가 main인 DOM 을 찾아서 Main 내용을 render 함
