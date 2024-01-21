//object can be declared by literals and constructors
//singleton obj is always created when declared by constructors ex create.object
//but when declared by literals sinleton is not created multiples are created ex let obj={}

//object is made up of keys and values

const JSuser={name: "hitesh",
mysym:"key1",
age: 18,
email: "hitesh@gmail.com",
isloggedin: false,
last_loggedin_days: ["monday","friday"]
}
//mostly is printed ny . but sometimes when req [] is used
console.log(JSuser.mysym)//symbol is printed but it is string
console.log( typeof JSuser.mysym)

//to declare or print an obj it should be qoutes in[]


console.log(JSuser.email)//shortcut way of accessing
console.log(JSuser["email"])//right way of accesing 

//but when in obj key is written in "" form then . method accessing cant be used needs to be accessed as "" method
const JSuser2={name: "hitesh","fullname":"khushidarbar"}
console.log(JSuser2["fullname"])
//*******to chaneg value */

JSuser.email="chatgpt@gmail.com"
console.log(JSuser.email);

//Object.freeze(JSuser)//no changes will be done in it further

JSuser.email="google@gmail.com"
console.log(JSuser.email);

JSuser.greetings= function()
{
    console.log("hello world");
}

JSuser.greetings2= function()
{
    console.log(`hello world,my name is ${JSuser.name}`);
    console.log(`hello world,my name is ${this.name}`);}

console.log(JSuser.greetings);//by this we get refernce of functionn
console.log(JSuser.greetings());

