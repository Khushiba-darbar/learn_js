let myobj={
    js:"javascript",
    cpp:"c++",
    swift:"swift",
    ru:"ruby"};
    for (const key in myobj) {
console.log(myobj[key]);
console.log(`${key} shortkut is for ${myobj[key]}`);
    }

    let programming=["js","java","cpp","python"]
//when for of is used for array it gives value and forin give index
        for (const key in programming) {
            console.log(key);
        }
        for (const key of programming) {
            console.log(key);
        }
//map is not iteratable therefore for in cant be udes in this
        const map=new Map()
        map.set("IN","india")
        map.set("US","United Stated")
        map.set("FR","france")
        
        for (const [key,value] in map)
        {//i
            console.log(key,":",value);
            console.log(key);
        }        