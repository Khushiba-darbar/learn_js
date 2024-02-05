//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){//datatype naame "of" obj(any thing)

    console.log(`${num}`);
}

let greeting="hello world"
for(let greett of greeting )
{
    console.log(`each char is ${greett}`);
}
//maps-holds value pairs and remembers original insertion order and there is no duplicate value in this 
const map=new Map()
map.set("IN","india")
map.set("US","United Stated")
map.set("FR","france")

for (const [key,value] of map)
{
    console.log(key,":",value);
}
//for of loop doesnt works for obj 