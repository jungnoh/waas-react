//React 라이브러리 사용 (JSX를 사용하려면 이게 필요하다네)
import React from 'react';
//rendering 하려고
import ReactDOM from 'react-dom'; 
//Main.jsx 가져오기!
import Main from './components/Main';

//id가 main인 DOM을 찾아서 저장
const mainEl = document.getElementById('main');
//브라우저상에 리액트 컴포넌트를 보여주자! ReactDOM.render(랜더링할 결과물, 랜더링할 DOM)
ReactDOM.render(<Main />, mainEl);
