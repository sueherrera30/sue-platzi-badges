import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(<en este espacio va el QUE ,SIEMPRE asegurarse que se este dando un elemento, 
//Asegurandonos que se cierre correctsmente. />, ---- este es donde lo queremos poner --->  container);

ReactDOM.render(<App />, container);
