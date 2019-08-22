// let a = 1;
// console.log(a);

/*
// 默认参数
"use strict";  // 严格模式（Es6默认使用）
function d() {
  function d(num) {
    console.log(num); // 1
    console.log(arguments[0]); // 1
    console.log(arguments);
    num = 2;
    console.log(num); // 2  num = 形参
    console.log(arguments[0]); // 1. arguments[0]= 实参. 非严格模式：2
    console.log(arguments); // true
  }
  d(1);
}*/

// 默认参数表达式
// const add = () => 10;
// function g(num = add()) {
//     console.log(num);
// }
// g();  //10


// 无命名参数
/*
{
  const demo = (object) => console.log(object.a + object.b);
  let obj = {
    a: 1,
    b: 2
  }
  demo(obj);
}
*/

// 不定参数
/*
{
  const add = (...arr) => {
    console.log(a + b);
  }
  let a = 1, b = 2;
  add(a, b)  //3
}
*/

// 箭头函数
/*
{
  // ES5
  var sum = function (a, b) {
    console.log(a + b);
    return a + b;
  }
  sum(1, 3);

  // ES6
  const sum = (a, b) => {
    console.log(a + b);
    return a + b;
  }
  sum(10, 30);

  // id= 形参， getTempItem = 函数名
  // {hello: "A", name: "Temp"}
  var getTempItem = id => ({ hello: id, name: "Temp" });
  getTempItem("A")

  // {id: "A", name: "Temp"}
  var getTempItem = id => ({ id: id, name: "Temp" });
  // ===
  var getTempItem = id => ({ id, name: "Temp" }); // key = id,形参名 = id, 可以省略 
  getTempItem("A")

  const f = () => 5;
  f(); // 5

  const print = desc => console.log(desc);
  print(1); // 1

  // this
  const print2 = desc => {
    console.log(desc);
    console.log(this); // this = Window 
  };
  print2(1); // 1
}
*/

// 对象
{


  {
    // 简写属性初始值
    // ES5
    function a(id) {
      return { id: id }
    };
    a(1); // {id: 1}

    // ES6
    const a6 = (id) => ({ id })
    a6(5); // {id: 5}


    str = "A";
    num = 20;
    // ES5
    obj = {
      str: str,
      num: num
    };
    console.log(obj); // {str: "A", num: 20}

    // ES6
    // obj vs var
    obj6 = { str, num };
    console.log(obj6); // {str: "A", num: 20}
  }



  // 简写对象方法
  // ES5
  const obj2 = {
    id: 1,
    printId: function () {
      console.log(this.id);
    }
    // 等价于
    // var printId2 = function(x, y){ // printId2(1,2)
    // }
    // function printId2(x, y)    {
    // }
  }
  console.log(obj2);
  obj2.printId(); // 1

  // ES6
  const obj2_6 = {
    id: 1,
    printId() {
      console.log(obj2_6.id);
      console.log(this.id);
    }
  }
  console.log(obj2_6);
  obj2_6.printId();  // 1



}

// 模板字符串（template string）ES6
// 1） 在字符串中嵌入变量 
// 2） 仅仅当做普通字符
{
  // 当行
  console.log('Hi, A');

  // 两行
  console.log(`Two
  Line`);

  // 嵌入变量
  let name = 'C';
  console.log(`Hi, ${name}`); // Hi, C

  let x = 2, y = 30;
  console.log(`${x} * ${y} =  ${x * y}`) // 2 * 30 =  60
}