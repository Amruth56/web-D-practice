console.log("loops in javascript")

// let i=0
for(i=0;i<3;i++){
    console.log(i)
}
console.log("\n")

//--------------------------------------------------------------------------------------------------------------


let alphabets=['a','b','c','d']
for(let index = 0; index < alphabets.length; index++) {
    console.log(alphabets[index])
    
}
console.log("\n")

//--------------------------------------------------------------------------------------------------------------

let numbers=[1,2,3,4,5]
for(x=0; x<=numbers.length; x++)
{
    console.log("the numbers are",numbers[x])
}
console.log("\n")

//--------------------------------------------------------------------------------------------------------------

let student={
    name: "Amruth",
    age:20,
    college:"iiitdwd"
}
//use this loop to iterate over objects in js
for (x in student){
    console.log(`the ${x} of student is ${student[x]}`)
}
console.log("\n")

//--------------------------------------------------------------------------------------------------------------

//while loop in js
i =0;
while(i<4){
    console.log(`${i} is less tha 4`);
    i++;
}
console.log("\n")

//--------------------------------------------------------------------------------------------------------------

//do-while loop in js
let j=10
do{
    console.log(`${j} is lesser than 4`)
    i++
}while(j<4)