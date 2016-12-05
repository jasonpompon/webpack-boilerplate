console.log('yay webpack');
console.log('blah');


const bam = () => {
  console.log('bam');
}

bam();


// this is es5
// var $ = require('jquery');
// console.log($.fn.jquery); just console logging the jquery version 

// same thing written in es6
import $ from 'jquery'
console.log($.fn.jquery);
