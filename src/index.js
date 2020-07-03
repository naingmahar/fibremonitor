import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import TreeChart from "./chart/tree.chart";
import './app.css'

const App = () => {
  return (
    <div>
        <TreeChart />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));