var str="This Is a String"
console.log(str) ;

y =new String("hello")
console.log(y)

//first occurence of a substring
var pos = str.indexOf("is");
console.log(pos)

//La st occurence of a substring
var pos=str.lastIndexOf("is");
console.log(pos)

//substring from a string
var substr =str.slice(1,9); // it can take negative values
console.log(substr)

var sbstr =str.substring(0,8); // it will not take negative values
console.log(sbstr)

var qwe= str.substr(1,3) // it says starting from 1 print 3 characters
console.log(qwe)

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//slicing
stri= y.slice(0,2)
console.log(stri)

//-------------------------------------------------------------------------------------------------------------------------------------------------------

var replaced = y.replace('h','m')
console.log(y)
console.log(replaced)

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//To print in upper and lower case
console.log(str.toUpperCase())
console.log(str.toLowerCase())

//-------------------------------------------------------------------------------------------------------------------------------------------------------

var newString= str.concat(" Universe");
console.log(newString)

console.log(str.concat(" qwerty"))


//-------------------------------------------------------------------------------------------------------------------------------------------------------

var strWithWhiteSpaces="     this contains more       white     spaces      "
console.log(strWithWhiteSpaces)
console.log(strWithWhiteSpaces.trim()) // Trim function removes white spaces from front and back

//-------------------------------------------------------------------------------------------------------------------------------------------------------

var text="hello world";
console.log(text.charAt(1));
console.log(text.charCodeAt(4));

//------------------------------------------------------------------------------------------------------------------------------------------------