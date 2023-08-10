import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div",{id:"parent"},
React.createElement("div", {id:"child1"}, 
    React.createElement("h1", {id:"child1_h1"}, "This is child1 heading1"),
    React.createElement("h2",{id:"child1_h2"},"This is child1 heading2"),    
),
React.createElement("div",{id:"child2"},
    React.createElement("h1",{id:"child2_h1"},"This is child2 heading1"),
    React.createElement("h2",{id:"child2_h2"},"This is child2 heading2"),    
)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);