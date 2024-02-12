const heading = React.createElement('h1',{
    id:"title",
    style:{
        color:"red",
        backgroundColor:"green"
    }
},"Hello Akhil");

const heading2 = React.createElement('h2',// first argument is the tag name
{ // second argument is attributes
    id:"title",
},
"heading 2"); // third argument is the child elements

const container = React.createElement('div',{
    id:"container"
},[heading,heading2]);


// react element is just an object 
// console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById('root'));

/// passing a react element inside the root
root.render(container);