console.log(this) // output will be the global object
const obj = {
    fn1:function (){
        console.log(this); // it gives the current object as the output
    },
    fn2:()=>{
        console.log(this); // it gives the global object
    }
}

obj.fn1();
obj.fn2();

const obj2 = {
    firstName : "Akhil",
    printName : ()=>{
        console.log(this.firstName);
    },
    printName2:function (){
        console.log(this.firstName)
    }
}

obj2.printName();
obj2.printName2();
obj2.printName.call();
obj2.printName2.call();