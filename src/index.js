import React, {Component} from 'react';
import {render} from 'react-dom'
// import { render } from 'react-dom'
// import { Children, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import PeopleList from './PeopleList'
// import './index.css';
// import Summary from './Summary';
// import Calculator from './Calculator';
// import * as serviceWorker from './serviceWorker';
// import StarRating from "./Star";
// const { Children, PropTypes } = React
// const { render } = ReactDOM


render(
 <PeopleList />,
 document.getElementById('root')
)








/*
const Display = ({ ifTruthy=true, children }) =>
    (ifTruthy) ?
      Children.only(children) :
    null
    const age = 22
render(
    <Display ifTruthy={age >= 21}>
    <h1>You can enter</h1>
    </Display>,
    document.getElementById('root')
)
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
