/*const coding=["js","ruby","cpp","js","python"]
const values= coding.forEach((item) => {
    console.log(item)
    return item
});
console.log(values)//no returned returned value 
//therefore values cant be returned in array by for each method*/

const mynum=[1,2,3,4,5,6,7,8,9]
const newnums=mynum.filter((num)=>num>4) //implicit control
console.log(newnums);
//const newnums2=mynum.filter((num)=>{num>4})-explicit control therefore return must be written otherwise an empty array comes
console.log(newnums);
const newno=[]
mynum.forEach((num)=>{
    if(num<4)
    {console.log("valid");
    newno.push(num)}
    else
    console.log("invalid");
})
console.log(newno);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks=books.filter((Book)=>Book.genre==="History")
  userbooks=books.filter((Book)=>Book.genre==="History" && Book.publish<1990)
  console.log(userbooks);