let a=3000
const b=20
//var c=300

//{}-scopr of program

if(true){
    let a=10//
    console.log("inner a:",a);//inside diff value can be assigned but globally it would be same
const b=20
//var c=30//if two times declared or assigned then confusion is created therefore it is avoided

}
console.log(a);
//console.log(b);
//console.log(c);

//when we do in console of any website i.e through inspect then global scope is different than this

/************nested scope************** */

function one() {
    const username="khushi"

    function two(){
        const Website="youtube"
        console.log(username);
    }
    //console.log(Website);//cant be accessed bcz two is already ovr
    two();
}
one()// two can access anything from one buyt one cant access from 2 bcz it is in it

/***********closure*********** */
//child function can access everything in parent function but parent function cant access form child func

if(true){
    const username="khushi"
    if (username==="khushi"){}
        let website="youtube"
        console.log(username+website);
}
//console.log(website);-cant be accessed cz out of sec scope}
//console.log(username);-cant be accessed cz out of first scope

//++++++++++++++++++interesting++++++++++++++++++++++
addone(67)
//by this method you can access it first before initialization
function addone(num){
   return num+1 //only returned not printed
}

addone(7)
//addtwo(8)-by this method cannot be declarded first before initialization or defination
const addtwo= function(num){
    return num +2 //2nd way to create func and this method is calle dby expression

}

const res1= addone(7)
console.log(res1);

const res2= addtwo(7)
console.log(res2);