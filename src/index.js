import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const element=document.querySelector('#root');
const root = ReactDOMcreateRoot(element);

root.render(<App />);
ReactDOM.render(<App />, document.getElementById("root"));