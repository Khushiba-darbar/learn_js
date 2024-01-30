let mydate=new Date()
console.log(mydate)
console.log(mydate.toDateString())//convert to string
console.log(mydate.toLocaleString())

console.log(typeof mydate)//object 

/*let mycreateddate=new Date(2023,0,23)//month start from 0 in js
mycreateddate=new Date(2023,0,23,5,3)*/
mycreateddate=new Date("2023-01-23")
//mycreateddate=new Date("23-10-2023")//
console.log(mycreateddate.toLocaleString())

let mytimestamp= Date.now();//give time in miliseconds
console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Date.now()/1000)//gives time in seconds with decimals
console.log(Math.floor(Date.now()/1000))//to remove decimals

let newdate=new Date(2023-0o3-24)
console.log(newdate);
console.log(newdate.getDate)
console.log(newdate.getDay);
console.log(newdate.getMonth+1)
console.log(`${newdate.getDate}and time is${newdate.getTime} and day is ${newdate.getDay}`)

newdate.toLocaleString('deafault',{day:"2-digit",newdate:mytimestamp})