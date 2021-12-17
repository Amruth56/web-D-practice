console.log("Date and Time in javascript")

let now = new Date();
console.log(now)

let nw = new Date(99990);
console.log(nw)

let newDate = new Date('01-06-2001'); // month-date-year or year-month-date
console.log(newDate)
let neDate = new Date('2001-01-06');
console.log(neDate)
// Date format = year month date hour minutes seconds milliseconds

let yr = newDate.getFullYear();
console.log("The year is",yr);

let month = newDate.getDate();
console.log("the month is",month);

let date=newDate.getDate();
console.log("The date is",date)

let hour=newDate.getHours();
console.log("The hour is",hour+1)

 newDate.setDate(5)
console.log(newDate)

setInterval(updateTime,1000);

function updateTime(){
    time.innerHTMl = new Date();
}

