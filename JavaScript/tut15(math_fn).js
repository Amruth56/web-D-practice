        // Printing Math Object
        let m= Math;
        console.log(m)

        //Printing Math Constants
        console.log("The value of math.E is ",Math.E)
        console.log("The value of math.PI is ",Math.PI)
        console.log("The value of math.LN2 is ",Math.LN2)
        console.log("The value of math.LN10 is ",Math.LN10)
        console.log("The value of math.LOG10E is ",Math.LOG10E)

        //Printing Math Functions
        let a= 1242.4
        let b= 123

        console.log("\n \nThe Value of a and b is",a,b)
        console.log("\n \nThe Value of a and b rounded is",Math.round(a),Math.round(b))

        console.log("4 raised to the power of 2 is", Math.pow(4,2))
        console.log("2 cube is",Math.pow(2,3))
        console.log("square root of 9 is",Math.sqrt(9))

        //ceil and floor function
        console.log("\n \n23.4 rounded up(Using ceil function) to the nearest integer is",Math.ceil(23.4))
        console.log("23.4 rounded down(Using floor function) to the nearest integer is",Math.floor(23.4))

        //absolute function
        console.log("\n \nThe absolute value of 123.3 is",Math.abs(123.3))
        console.log("The absolute value of -123.3 is",Math.abs(-123.3))

        //Trigonometry function
        console.log("\n \nThe value of sin(pi/2) is",Math.sin(Math.PI/2))
        console.log("The value of cos(pi/2) is",Math.cos(Math.PI/2))
        console.log("The value of tan(pi/2) is",Math.tan(Math.PI/2))

        //Min and Max functions
        console.log("\n Minimum value in 1,2,3, is",Math.min(1,2,3))
        console.log("\n Maximum value in 1,2,3, is",Math.max(1,2,3))
        
        //Generating Random Number
        console.log("The random number is",Math.random())

        //To get a random number between two interval a and b
        a=0
        b=100
        console.log("The random number is",a + (b-a)*Math.random())