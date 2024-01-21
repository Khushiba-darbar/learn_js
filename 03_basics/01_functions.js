
function saymyname()//defination
{
    console.log("k");
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
}

saymyname//without parenthsis -reference
saymyname()

function addtwonum(num1,num2)
{
    console.log( num1+num2);
}

function addTwonum(number1,number2)
{
    /*let result=number1+number2
    return result*/
    console.log("hey")
    return number1+number2;
    console.log("khushi")//this will not be printed beacuse after return the value in function operated above is returned

}const result=addTwonum(676,124)//if we retun the value of result must be stored in variable
console.log("result",result);


addtwonum(56,78)

//but if one string is given this it will take first as also string
addtwonum(3,"a")
addtwonum("a",3)
addtwonum(3,null)

//in defination matter inside parenthesis(brackets) is called parameters
//while execution or calling anything in parenthesis is called arguements

const result2=addTwonum(45,"agfksdhg")
console.log("result",result2);
//if return karaiye to aavi rite lakhvu compulsory che

function loginuser(username)
{
    return `${username} just logged in`
}
//loginuser(khushi )-no output will come beacause the func is called and executed and value is returned
//but it was not stored in any variable or said to print or output soo it will not give any output

console.log(loginuser("khushii"));//1st way

const out=loginuser("khushiii")//2nd way
console.log(out);

//if no value is passed in parenthseis then it is thought of as undefined
//to check if else is used

function loginuser(username)
{
    if(username===undefined)//if(!username){..........}
    {console.log("please enyter the vlaue");
    return
}
    return `${username} just logged in`
}

console.log(loginuser());