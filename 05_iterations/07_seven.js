const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
let newnums=arr.map((nums)=>nums+10)
console.log(newnums);

newnums=arr.forEach((num) => 
    {if(num>5)
    {
     return num=num+5
    }

});;
console.log(newnums);
newnums=arr.map((num)=>num*10).map((num)=> num+5).map((num)=>num/2).filter((num)=>num<20)
console.log(newnums);