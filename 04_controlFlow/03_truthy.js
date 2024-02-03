//truthy=assumed string has rue vale;means if ani andar koi value che to truthy 
const email="abc@gamil.com"

if(email)
{
    console.log("got user email");
}
else
{
    console.log("not got user email");
}

//falsy values=false,0,-0,bigint(0n),"",nan,null,underdefined
//truthy values="0","false"," ",empty array,empty object,empty function (function(){})\

/*if(email.length===0)
{console.log("array is empty");}*/

const emptyobj={}

/*if (object.keys(emptyobj).length===0)
{
    console.log("object is empty");
}

//false==0//true
//false==""//true
//0==""//true*/

//nullish  coaleshing operators(??):for null an undefined
//when  null comes then there is a backup which is used
//and there is no simple values instead of tht there is function
let val1;
val1=5??10;
val1=null??10;
console.log(val1);
let val2;
val2=undefined??15
console.log(val2);
let val3;
val3= null??undefined??13;//if null then secomd is printed nd it is also null or undefined then third 0ne is printed

console.log(val3);

//ternary operator
//cond?true:false

const icedtea=150;
icedtea>300?console.log("overpriced"):console.log("properly priced");