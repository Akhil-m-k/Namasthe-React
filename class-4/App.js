// import React from "react";
import ReactDOM from "react-dom/client";
// react element
const heading =  <h1 id="title" key="head1">Hello Akhil</h1>;
const Title = ()=>(
    <h1 id="title" key="t1">hello guys</h1>
)
// React Component
// Functional component - NEW
/// Name of the  component is start with a capital letter,it is not neccessary, but it is just a good practice
const HeaderComponent = ()=>{
    return (
    <div>
       <Title />
       <Title></Title>
        {Title()} 
        {heading}
        <h1>functional component content</h1>
        <h2>this is heading 2</h2>
    </div>
    )
}
const root  = ReactDOM.createRoot(document.getElementById('root'));
console.log("akhil");
/// passing a react element inside the root
// root.render(heading);

root.render(<HeaderComponent />); // for running functional component