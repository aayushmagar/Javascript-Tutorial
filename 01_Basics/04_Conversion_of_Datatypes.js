console.log(null==0);
console.log(null>0);
console.log(null>=0);
//note:here the reason that an equality check == and comparisons <>>=<=they work differently
//comparision convert null to a number,treating it as 0. that's why
//third(3)null>=0 will be true and second(2)null>=0 will be false.

//> from to Numbers:
//"33" => 33
//"33abc" => NaN
 //true => 1;
  //false => 0


//> from to Boolean:
  //1 => true;
  // 0 => false;
  //NaN => false;
  //"" => false;
  //"hitesh" => true;


//>convert during operations
//=>if string is written first then convert all after it to string:
  //            "2" + 2 + 2 = 222
  //             "1" + 2 = 12
//=>if string comes after then the conversion occurs at last 
   //            2 + 2 + "2" = 42
     //          1 + 1 + "2" + 2 + 1  = 2221

//     use +operand to convert the operand to number