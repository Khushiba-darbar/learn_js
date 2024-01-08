/*************primtive ************
int,bigint,boolean,undefined,null,string,symbol */
const score=100
const scoreVal=100.3
const isloggedin=false
const outsidetemp=null
let username
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
console.log(id)
console.log(anotherid)

const bign=112223445465766876435241n
console.log(typeof bign)
// ***************non-primtive***********
//array,object,function

const animals=["dog","cow","cat"]//array
{ id:
 name:""}//obj
//or you can write like
let myObj={name:"khushi",
age:17}

const myFunc=function(){console.log("hello");}

/*
datatype          typeof
---------------------------
number            number
string            string
null              object
boolean           boolean
symbol            symbol
obj(native and does not implement)           object
obj(native or host and does implement)       object function
obj(host and does not implement            maybe undefined or number or string or boolean
*/

/* ************stack*******
used in primtive dat type we get copy of variable 
**************heap***********
udes in non-Primitve data type we get reference

*/

let myusername="khushu"
let anothername=myusername
anothername="KHUSHI DARBAR"

console.log(anothername)//aama copy mali
console.log(myusername)

let user1={email:"abc@gmail.com",
upi:"user@ybl"}

let user2=user1

user2.email="khushi@gmail"

console.log(user1.email)
console.log(user2.email)//aama direct reference malyo