const munums=[1,2,3,4,5,6,7]
//very much used in billing 
let mytotal=munums.reduce(function (accumulator,cv){
    console.log(`acc:${accumulator} and cv is ${cv}`);
    return accumulator+cv;},8)
console.log(mytotal);



    const shoppingCart=[{
        course:"learn js",
        price:12999
    },{
        course:"python",
        price:9999
    },{
        course:"mob dev",
        price:19999
    },{
        course:"jc language",
        price:5999
    },{
        course:"graphics",
        price:29999
    }
]
let totalbill=shoppingCart.reduce(
    (acc,item)=>acc+item.price,0)
    console.log(totalbill);

