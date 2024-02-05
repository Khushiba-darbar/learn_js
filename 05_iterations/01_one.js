//for
/*for (let i = 0;i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("5 is best");
    }
    console.log(element);
}*/

for(let i=0;i<=10;i++)
{for(let j=0;j<=10;j++)
{if(i==5)
    console.log(i+'*'+j+'='+i*j);
}}

/*let myarr=["flash","batman","superman"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
}*/

//break and continue

/*for (let index = 1; index <=20; index++) {if(index===5){
     console.log(`detceted 5`);
     break//it break the loop from here
}
    const element = index;
    console.log(`value of i is${index}`);
}*/

for (let index = 1; index <=20; index++) {if(index===5){
    console.log(`detceted 5`);
    continue//it just terminate the after process for that element but continues again for same element
}
   const element = index;
   console.log(`value of i is${index}`);
}