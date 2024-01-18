let marvelheros=["thor","ironman","spiderman"]
let dc_heros=["flash","superman","batman"]

marvelheros.push(dc_heros)//it doesnt merge but gives array inside array
console.log(marvelheros)
console.log(marvelheros[3][1])

marvelheros.concat(dc_heros)
console.log(marvelheros)//same as push array inside array

//concat-combines two or more arrays nd return new array
//push pushes value in one array does not give another array

let allheros=marvelheros.concat(dc_heros)
console.log(allheros)

/*********spread******** (drop glass amd it will spread into pieces)*/

const all_new_arrays=[...marvelheros,...dc_heros]
console.log(all_new_arrays)//to join all elemts easily and can add 2+arrays too easily

let anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_anotherarr=anotherarr.flat(Infinity)
console.log(real_anotherarr)
//flat-returns array with all sub-array concatenated into recursively upto specific depth

console.log(Array.isArray("hitesh"))//check is an array or not
console.log(Array.from("hitesh"));//give one one eleemt differentialy like 'h','i' etc
console.log(Array.from({name:"hitesh"}));//inetresting gives []result beacuse it cant indentify array is of which element
console.log(Array.of("hitesh"))//gives value present on array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))
