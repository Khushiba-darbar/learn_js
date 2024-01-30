//IIFE-immediately invoked function expresiions\

(function chai()
//named iife
{console.log("db connected");}
)();// to immediately invoke write func in() and after func end again write ()
// and this is done to avoid pollution created cz of global scope

/********************************************************************* */
//()();//first for func defination and second for calling that function and semicolon for ending that function
/***************************************************************************** */

//by arrow function

((name)=>{console.log(`${name}welcome to db2`)})('khushi');//unnamed iife

//to write two iife use  semicolon to end one otherwise first one wont stop and second one does not get started
