console.log("Practice using JSON")

let JSONobj = {
    name : "Amruth Mandappa T.S",
    age:19,
    college:'IIIT DWD',
    song:"No Lie"
}
console.log(JSONobj)

let myJsonStr = JSON.stringify(JSONobj)
console.log(myJsonStr)

myJsonStr = myJsonStr.replace("Amruth","King")
console.log(myJsonStr)

newJson = JSON.parse(myJsonStr)
console.log(newJson)