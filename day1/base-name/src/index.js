import React from 'react'; // React import
import ReactDOM from 'react-dom'; // ReactDOM import
import Main from './components/Main'; // ./compenents/Main.jsx import

const mainEl = document.getElementById('main'); // define mainEl by div main in index.html
ReactDOM.render(<Main />, mainEl); // render Main at mainEl
