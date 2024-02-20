const tinderuser=new Object()
tinderuser.name="het",
tinderuser.isloggedin=true,
tinderuser.email="abc@gmail",
tinderuser.id="123ab"

console.log(tinderuser);
//singleton by constructors
//const tinderuser{}non singleton by literals

const regularuser={
    fullname:{firstname:"khushi",
    lastname:"darbar"
},
    id:"456abc",
    email:"xyz@gmail"
   
}/*
console.log(regularuser.fullname.firstname);
//question chaining contains question mark which states that if one thing doesnt exist then this method is used 
//for this if else can be used but to reduce complexity ?is used

console.log(regularuser.fullname?.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
let obj3={obj1,obj2}//its output will be object in object
obj3=Object.assign(obj1,obj2)
console.log(obj3);
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
obj3=Object.assign({},obj1,obj2)//an empty array is also incl for accorate and guaranteed result
console.log(obj3);
//it mmeans boths value is incl in {} other it is incl in obj1

obj3={...obj1,...obj2}
console.log(obj3);
const users=[{
    id: 1,email:"abc@gmail"
},
{
    id: 2,email:"abd@gmail"
},
{
    id: 3,email:"abe@gmail"
},{
    id: 4,email:"abf@gmail"
},{
    id: 5,email:"abg@gmail"
}]*/


console.log(tinderuser)
console.log(Object.keys(tinderuser))//output is in array
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isloggedin"));// to see is the requires key is in the obj or not

//to explore more properties if obj then create one obj in console by inspecting
//and then write tht obj name nd enter youll get its prototype and explore more

const course={
    coursename:"learnjs",
    price:10000,
    instructor:"hitesh sir"
}

const{instructor}=course// alternative of course.instructor-to call the value ofinstructor
console.log(instructor);

/*********react*********** 

//const navbar()=>{}//
const navbar({company})
navbar(company="hitesh")*/

{
    name:"learn js",
    price=100000,
    instruct="hiteshsir"
}
