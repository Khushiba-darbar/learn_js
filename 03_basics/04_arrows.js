const user={
    username:"khushi",
    price:999,

    welcomeMessage:function()
    {
        console.log(` ${this.username} welcome to website`);
        console.log(this);//it gives current context
        //this refers to current context
    }
}
user.welcomeMessage()
user.username="sam"//username change karayu
user.welcomeMessage()
console.log(this);//output is {} cz globally there is no context

//when the engine runs in browser then global object is windows

function chai()
{
    name:"khushu"
    console.log(this.name);//output-undefined // cz it doesnt work like that
}
chai()

const chai2=function(){
    name:"khushu"
    console.log(this);//but when written in func then too much things comes
    console.log(this.name);
}
chai2()

/******************arrow function******************* */

const chai3=() =>{
    name:"khushu"
    console.log(this);//but when written in this func then too much things comes
    //but in arrow empty array comes
    console.log(this.name);
}
chai3()

//difference between arrow func and this function is that 
//in arrow when this is written in func thne empty array comes
//in any func when this is written in func thne too much things come

//()=>{}-basic arrow function
/**************explicit returned *************** */
//return is must
const addition = (num1,num2) =>{
    return num1+num2
}

const r=addition(5,6)
console.log(r);

//**********another way of arrow func declaration */
/***************implicit retunred**************** */

// no need to return
// if we use {} then return should be must written otherwise
//and for object it is must to wrap it in {} and use return

const addition2 =(num1,num2)=> num1+num2
//const addition2 =(num1,num2)=>( num1+num2)-both are same
const r2= addition2(3,4)
console.log(r2);


const Myarray=[2,3,45,56,7]
Myarray.forEach(function(){})
//Myarray.forEach(name=()=>{})