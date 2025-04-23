import React from "react"; // we need to just write or import this
//var ReactDom = require('react-dom')
import ReactDOM from 'react-dom/client'; 
import ReactDom from "react-dom"; // just need to write this modern javascript library

import "./index.css";

import Card from "./components/Card";

import Carddata from "./components/Carddata";
// import AppKeep from "./components/Google keep app/App";

function ncarddata(val){
  return(  <Card
    key = {val.id}
    imgsrc = {val.imgsrc}
    title = {val.title}
    name = {val.name}
    link ={val.link}
    />);
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <h1 className='heading_style'>List of Top Movies</h1>
    {Carddata.map(ncarddata)}
  </>
);