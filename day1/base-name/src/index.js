import React from 'react';
//react를 쓰기 위해 필수적인 작업
import ReactDOM from 'react-dom';
//실제로 그려야 하기 때문에 import
import Main from './components/Main';
//Main을 render하기 위해 import한다.

const mainEl = document.getElementById('main');
// index.html에서 id가 main인 div를 찾는다.

ReactDOM.render(<Main />, mainEl);
// 찾은 곳에 Main.jsx에서 import한 Main을 그려준다.
