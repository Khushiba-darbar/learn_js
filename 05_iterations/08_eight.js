const munums=[1,2,3,4,5,6,7]
//very much used in billing 
let mytotal=munums.reduce(function(acc,cv){
    console.log(`acc:${acc} and cv is ${cv}`);
    return acc+cv},0)
console.log(mytotal);

mytotal=munums.reduce((acc,cv)=>
    (console.log(`acc:${acc} and cv is ${cv}`)
    acc+cv),0;
    console.log(mytotal);
