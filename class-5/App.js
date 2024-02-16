import React from "react"; 
import ReactDOM  from "react-dom/client";

const title =  (
    <h1 id="title" key="title">
        Food Villa
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
/*
React.Fragment is a component that is exported form the React library 
JSX only allow one parent element, suppose we have to use more than one parent element 
the we need to use an outer div or something. but that will effect our code. so we can use this to solve this problem.
React.Fragment doesn't make any changes in your code
we can use the React.Fragment like below,
<React.Fragment></React.Fragment> or <></>
 */

// config driven UI
// virtual dom = reconciliation
// React Fiber => it's a reconciliation engine which cames in react-16
// const objStyle = {
//     color:"red",
//     backgroundColor:"yellow"
// }
// const HeaderComponent = ()=>{
//     return (
//     <>
//         {title}
//         <h1 style={objStyle}>hello akhil</h1>
//     </>
//     )
// }