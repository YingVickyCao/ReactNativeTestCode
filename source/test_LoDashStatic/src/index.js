import _ from 'lodash'

// var s = document.createElement('script');
// s.src ='https://raw.githubusercontent.com/lodash/lodash/4.17.15-npm/core.js';
// document.getElementsByTagName('head')[0].appendChild(s);

// window.loadsh = _;
// window._=_;

function test() {
  test_foreach([1, 2, 3]);
  test_map([1, 2, 3]);
  test_map_4_loadash([1, 2, 3]);
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
  _.map(arr, item => item * item);
  console.log(arr);
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