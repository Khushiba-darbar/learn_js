//array-stroing multiple value unsder name of single variable
//in js array are resizelable and 
const arr=[0,1,2,3,4,5]
console.log(arr);
//indexing starts from 0 and values can be accessed with the index only
/*shallow copy-same referece point meansif ekjagya achange krisu biji jagya a bi chnage thase
deep-dont have same refernec poitn ie copy ar made
********* array copy operator creates shgaloow copies*/

console.log(arr[2])

let arr2=["shaktiman","shahrukhkhan","salmankhan","imraankhan","aamirkhan"]
//you can also declare as 
//let arr2=new Array("shaktiman","shahrukhkhan","salmankhan","imraankhan","aamirkhan")
console.log(arr2[4]);

arr2.push(6,7,8)
console.log(arr2);//add value in array
arr2.pop()//delete last value
arr2.unshift(15)//insert value at beg but for it other values index needs to be removed an dit becomes tidous when there are too many values
console.log(arr2);
arr2.shift()
console.log(arr2);//removes 1st elemt
/**questions */
console.log(arr2.includes(7))
console.log(arr2.indexOf('shaktiman'))

let newarr=arr2.join
console.log(arr2);

console.log(newarr);//coverts array to string

/********slice and splice******** */
//slice=returns a copy of section of an array
//last element is not included

console.log("A",arr2)
let myn1=arr2.slice(1,3)
console.log("ansa",myn1);//[ 'shahrukhkhan', 'salmankhan' ]

console.log("B",arr2)
let myn2=arr2.splice(1,3)
console.log("c",arr2);//c [ 'shaktiman', 'aamirkhan', 6, 7 ]
//1 to 3 is not incl ie gives out by manipulating original array
//splice krya pchi print karaiye to je juno array hto hve e change thai gyo
console.log(myn2);//[ 'shahrukhkhan', 'salmankhan', 'imraankhan' ]


/*******************************************************************************
 * slice range included and returns piece of array without changing original arrays
splice range not included returns arrays by manipulating original array
*************************************************************/