// 解构 (Destructuring):从数组和对象中提取值，对变量进行赋值，这被称为解构
// 解构分类：数组解构,对象解构,字符串解构

// 数组解构赋值
{
    // ES6

    // 模式匹配:只要等号两边的模式相同，左边的变量就会被赋予对应的值. 如果解构不成功，变量的值就等于undefined。
    let [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2

    let [a, b, c] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // undefined


    // 使用嵌套数组进行解构
    // TODO:
    // let [a, [[b], c]] = [1, [[2], 3]];

    // a;
    // b;
    // c;

    // TODO:
    let [a, [[b], c]] = [1, [[2], 3]];
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3

    let [, , three] = ["A", "B", "C"]
    console.log(three); // C

    let [x, , y] = [1, 2, 3];
    console.log(x); // 1
    console.log(y); // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head; // 1
    tail; // [2, 3, 4]

    let [x, y, ...z] = ['a'];
    x; // x
    y; // undefined;
    z; // []

    let [m] = [];
    m;  // undefined

    let [bar, foo] = [1];
    bar; // 1
    foo; // undefined

    let z = [];
    z; // []

    // 不完全解构:等号左边的模式，只匹配一部分的等号右边的数组
    let [x, y] = [1, 2, 3];
    x // 1
    y // 2

    let [a, [b], d] = [1, [2, 3], 4];
    a // 1
    b // 2
    d // 4

    // 如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。

    let [foo] = 1;
    let [foo] = false;
    let [foo] = NaN;
    let [foo] = undefined;
    let [foo] = null;
    let [foo] = {};
    food // ERROR:Uncaught ReferenceError: food is not defined
    
    // 解构赋值时指定默认值。
    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
}


  // 对象的解构赋值
// 函数参数的解构赋值
// 函数参数默认值与解构赋值默认值结合使用

// 字符串的解构赋值
// 解构的用途
