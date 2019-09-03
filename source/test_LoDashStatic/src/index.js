// import _ from 'lodash'

// var _ = require('lodash');
// var _ = require('lodash/core');

// var s = document.createElement('script');
// s.src ='https://raw.githubusercontent.com/lodash/lodash/4.17.15-npm/core.js';
// document.getElementsByTagName('head')[0].appendChild(s);

function test() {
  // alert("hello world")
  // test_foreach([1, 2, 3]);
  // test_map([1, 2, 3]);
  // test_map_4_loadash([1, 2, 3]);
  // test_reduce();
  test_get();
}

/*
map vs forEach
map:
1) this = Window
2) 有返回值
3) 传递item + index + array


forEach：
1）没有返回值
2）[1, 4, 9]
3) 传递item
*/
function test_map(arr) {
  var a = arr.slice(0);  // copy list
  console.log(a === arr); // true
  a = a.map(function (item, index, arr) {
    // console.log(this);
    var tmp = item * item;
    console.log("item=" + item + ",index=" + index + ",arr=" + arr + ",a=" + a + ",tmp=" + tmp);
    return tmp;
  })
  console.log(a);   // [1, 4, 9]
  console.log(arr); // [1, 2, 3]
  return a;
}

function test_map_4_loadash(arr) {
  console.log(arr);
  var a = _.map(arr, item => { item * item });
  console.log(a);
}

function test_foreach(arr) {
  var a = [];
  arr.forEach(function (item) {
    a.push(item * item);
    console.log("item=" + item + ",a=" + arr);
  })
  console.log(a);   // [1, 4, 9]
  console.log(arr); // [1, 2, 3]
  return a;
}

function test_reduce() {
  var collection = [
    { n1: 1, n2: 9 },
    { n1: 2, n2: 8 },
    { n1: 3, n2: 7 }
  ];

  var memo = [];
  var result = _.reduce(collection, (memo, item, index) => {
    memo.push(item.n1 + item.n2)
    console.log("item=" + item + ",n1=" + item.n1 + ",n2=" + item.n2 + ",memo=" + memo); return memo;
  }, memo)
  console.log("result=" + result);
}

function test_get() {
  // var object = {
  //   'a': {
  //     'b': {
  //       'c': 3
  //     }
  //   }
  // }
  // var type = _.get(object, 'b.c', null  );
  // console.log(type);

  var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
  //  FIXED_ERROR:Uncaught TypeError: _.remove is not a function.
  // https://stackoverflow.com/questions/56299044/lodash-uncaught-typeerror-remove-is-not-a-function
  _.get(object, 'a[0].b.c');
  
  console.log(_.isEmpty(object));
  // => 3
   
  _.get(object, ['a', '0', 'b', 'c']);
  // => 3
   
  _.get(object, 'a.b.c', 'default');
  // => 'default'

}