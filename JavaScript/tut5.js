var string1="This is the first string"
console.log(string1);

//---------------------------------------------------------------------------------------------------------------------------------------

let a='a'
// let a='df'  //we cannot def a single variable 2 times while using let function
{
    let a="am"
    console.log(a)
}
console.log(a)

//---------------------------------------------------------------------------------------------------------------------------------------

const z = "this cannot be changed" // we cannot change the variable which is defined in the constant part

// z="trying to change"
console.log(z)

//---------------------------------------------------------------------------------------------------------------------------------------

let age=18;
if (age>18){
    console.log('you are now a major')
}
else if(age==18){
    console.log("from now you are a major")
}
else if(age==1){
    console.log("you are a new born baby")
}
else{
    console.log("you are still a minor")
}

//---------------------------------------------------------------------------------------------------------------------------------------

const cups=45;
switch (cups) {
    case 4:
        console.log("The value of cups is 4")
        break;
    case 41:
        console.log("The value of cups is 41")
        break;
    case 42:
        console.log("The value of cups is 42")
        break;
    case 43:
        console.log("The value of cups is 43")
        break;

    default:
    console.log("The value of cups is neither 4 or 41 or 42 or 43")
        break;
}

//---------------------------------------------------------------------------------------------------------------------------------------