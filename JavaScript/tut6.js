let myVar1 = 34;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

//------------------------------------------------------------------------------------------------------------

let student =
{
    name : 'Amruth',
    class: "2nd year cse",
    college: "IIIT DHARWAD",
    place: "KODAGU",
    state: "Karnataka"

}
console.log(student  )

//------------------------------------------------------------------------------------------------------------

let names=[1,2,3,"hello",true];
console.log(names);
console.log(names[4]);

//------------------------------------------------------------------------------------------------------------

// NEW keyword in javascript is used to create new object
let newArray = new Array(81,2,1,"world",false);
console.log(newArray);
newArray=newArray.sort();
console.log(newArray);
console.log(newArray.length);

newArray.push("This newArray is pushed")
console.log(newArray)

console.log(newArray.pop())
console.log(newArray.pop())

console.log(newArray)

//------------------------------------------------------------------------------------------------------------
