const score=400
console.log(score);

const balance=new Number(score)
console.log(balance)

console.log(balance.toString().toLength);
//console.log(balance.toFixed(1))

const otherno=23.9893748
//console.log(otherno.toPrecision(4))

const hundreds=100000000
//console.log(hundreds.toLocaleString('en-In'))//to write num wth comma

//**********************maths ***********************/

console.log(Math
)
console.log(Math.abs(-4))//sign ne opp krse
console.log(Math.round(4.9876546789,6))//rounf\d off krse
console.log(Math.ceil(4.2))//rrot no
console.log(Math.floor(4.9))//after no
console.log(Math.min(3,5,7,8,1))//find min no
console.log(Math.random())//value obt is between 0 and 1
console.log((Math.random()*10)+1)//*10 beacuse 1 decimal ma lavu hoi nd +1 ensures tht value is not zero
console.log(Math.floor((Math.random()*10)+1))//to get floor value

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)