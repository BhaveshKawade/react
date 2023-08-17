import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;


const HeadingComponent = () => (<div id="headingComp" className="headingComp">
        React Component
        </div>
);        

const title = (
        <h1 id="heading" className="heading">
        {elem}
        React Element
        <HeadingComponent/>
        </h1>
        );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);