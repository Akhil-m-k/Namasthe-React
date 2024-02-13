import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1',{
    id:"title",
    key:"head1",
    style:{
        color:"red",
        backgroundColor:"green"
    }
},"Hello Akhil!");

const heading2 = React.createElement('h2',// first argument is the tag name
{ // second argument is attributes
    id:"title",
    key:"head2"
},
"heading 2"); // third argument is the child elements

// React.createElement => it gives an object => HTML DOM

const container = React.createElement('div',{
    id:"container"
},[heading,heading2]);


// react element is just an object 
// console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById('root'));
console.log("akhil");
/// passing a react element inside the root
root.render(container);