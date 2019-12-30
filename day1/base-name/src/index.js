import React from 'react'; //React 불러옴
import ReactDOM from 'react-dom'; //ReactDOM 불러옴
import Main from './components/Main'; //component (Main) 불러옴

const mainEl = document.getElementById('main'); //mainEl 정의: main (DOM)
ReactDOM.render(<Main />, mainEl); //mainEl 출력
