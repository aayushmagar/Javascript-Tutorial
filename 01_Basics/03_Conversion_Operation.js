
let score = 33
//console.log(typeof score);
 score = null
//console.log(typeof score);
let valueInNumber = Boolean(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" = 33
//"33abc"=NaN
//true = 1; False=0
//"" = false
//"aayush"=true


//let someNumber = "42"
//let stringNumber =String(someNumber)
//console.log(stringNumber);

//***************OPERATION ******************//

//let value = 3
//let negValue =-3
//console.log(negValue);

//console.log(1+2);
//console.log(2-2);
//console.log(2**3);
//console.log(10/5);
//console.log(10%5);
//console.log(2*4);

let a="Aayush"
let b=" Magar"
let c = a+b
//console.log(c);

//console.log("1"+2); // (the result here will be 12)
//console.log(1+"2"); // (the result here will also be 12)
//console.log("1"+2+2);//(here the result will be 122 because of the operation precedence where at first string will be ....look another line..... 
//added with the number just like ("1"+2+2) = 122 and never write the code like this instead use like this ("1"+(2+2))....  )
//console.log(1+2+"2")//(here the result will be 32 because firstly two number 1 and 2 is added and after that string("2") .....look another line....
//will be added in which the result will be(1+2+"2")=32 )

//console.log((3+4)*6/3);
//console.log(+true);

//note: never use code like this let num1, num2, num3
// num1=num2=num3=2+3 never do this because it does not maintain readability
let gameCounter=100
++gameCounter;

console.log(gameCounter);
let gamecounter=100
gamecounter++;
console.log(gamecounter);
