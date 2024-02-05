const coding=["cpp","java","py","ruby","js","swift"]

coding.forEach(  function (item){
    console.log("hello ",item);
})

coding.forEach(   (item,index,array) => {
    console.log("hello arrow func ",item,index,array);
})

function printme(){
    console.log(`printme `);
}
coding.forEach(printme)

const mycoding=[{
    langname:"javascript",
    langfilename:"js",
},
{
    langname:"java",
    langfilename:"java",
},
{
    langname:"c++",
    langfilename:"cpp",
}
]

mycoding.forEach(function (item){
    console.log(item.langfilename);
})