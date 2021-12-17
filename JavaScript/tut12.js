console.lo\ ("javascript to set timeout  and set interval")

//  ==============>      setTimeout--> allows us to run the function once after the interval of time

//  ==============>      clearTimeout--> allows us to run the function repeatedly after the interval of time

        function greet(){
            console.log("Its an honor to meet a person like you ")
        }
        setTimeout(greet, 3000);
        // setTimeout(greet(), 3000); ---> its wrong as it is calling greet function inside setTimeout 

        function greetings(name){
            console.log(` Hello ${name} how are you doing nowadays`)
        }
        greetings("Amruth")

        let txt = setTimeout(greetings,3000,"Mandappa")
        console.log(txt)



        function gr8(name,txt){
            console.log("hello, I am glad to meet you",name," ",txt)
        }
        intervalId=setInterval(gr8,3000,"Amruth","how are you doing nowadays")
        clearInterval(intervalId)


        function displayTime(){
            time = new Date();
            console.log(time);
            document.getElementById('time').innerHTML=time;
        }

        setInterval(displayTime, 5000);
   