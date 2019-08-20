let a=1;
console.log(a);



{
    "use strict";  // 严格模式
    function d(num) {
      console.log(num); // 1
       console.log(arguments[0]); // 1
      console.log(arguments);
      num = 2;
     console.log(num); // 2  num = 形参
       console.log(arguments[0]); // 1. arguments[0]= 实参
      console.log(arguments); // true
    }
    d(1);
}