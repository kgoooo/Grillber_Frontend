import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import Grillber from './components/Grillber'
import styles from '../src/styles/styles.scss'
import "normalize.css/normalize.css";
import "react-datepicker/dist/react-datepicker.css";

// import { Provider } from "react-redux"
// import store from "./store/configureStore"



ReactDOM.render((
	// <Provider store={store}>
	<BrowserRouter>
		<Grillber />
	</BrowserRouter>
	),
	// </Provider>,
	document.getElementById('app'))