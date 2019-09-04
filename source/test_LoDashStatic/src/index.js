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
  // test_get();
  test_chain();
  // test_head();
  // test_tail();
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
  console.log("memo=" + memo); // memo = result
}

function test_get() {
  var object = { 'a': [{ 'b': { 'c': 3 } }] };
  //  FIXED_ERROR:Uncaught TypeError: _.remove is not a function.
  // https://stackoverflow.com/questions/56299044/lodash-uncaught-typeerror-remove-is-not-a-function
  console.log(_.get(object, 'a[0].b.c')); // => 3
  console.log(_.get(object, ['a', '0', 'b', 'c']));  // => 3
  console.log(_.get(object, 'a.b.c', 'default')); // => 'default'

  var object2 = {
    'a': {
      'b': {
        'c': 3
      }
    }
  }
  console.log(_.get(object2, 'a.b', '')); // {c:3}
  console.log(_.get(object2, 'a.b.c', '')); // 3
}


function test_chain() {
  // minBy,sortBy,map,head,tail
  var users = [
    { 'user': 'A', 'score': 100 },
    { 'user': 'B', 'score': 20 },
    { 'user': 'C', 'score': 90 }
  ]
  var first = _
    .chain(users)
    .sortBy('score') // B C A
    .map(function (item) {
      console.log(item.user + "'s score is " + item.score)
      return item;
    })
    .head()
    .value();
  console.log("first=" + JSON.stringify(first));  // {"user":"B","score":20}

  var min = _
    .chain(users)
    .sortBy('score')
    .minBy('score');
  console.log("min=" + JSON.stringify(min));  // {"user":"B","score":20}

  var tail = _
    .chain(users)
    .sortBy('score') 
    .map(function (item) {
      console.log(item.user + "'s score is " + item.score)
      return item.user + "'s score is " + item.score;
    })
    .tail()
    .value();

  console.log("tail=" + tail);  // C's score is 90,A's score is 100
}

function test_head() {
  console.log(_.head([1, 2, 3]));
  console.log(_.head([]));

  var users = [
    { 'user': 'A', 'score': 10 },
    { 'user': 'B', 'score': 100 },
    { 'user': 'C', 'score': 90 }
  ]
  var first = _.head(users);
  console.log("first=" + JSON.stringify(first));

  var last = _.tail(users);
  console.log("last=" + JSON.stringify(last));
}

function test_tail() {
  console.log(_.tail([1, 2, 3]));   // [2, 3]
  console.log(_.tail([]));          // []

  var users = [
    { 'user': 'A', 'score': 10 },
    { 'user': 'B', 'score': 100 },
    { 'user': 'C', 'score': 90 }
  ]

  var tail = _.tail(users);
  console.log("tail=" + JSON.stringify(tail));  // [{"user":"B","score":100},{"user":"C","score":90}]
}