console.log('hello hai dep trai cute so 1');

//var ultil= require('./ultil');
var MD5 = require('md5.js')
var {sum,PI }=require('./ultil');

// ultil
var x=10;
var y=15;
var s=sum(x,y+PI);

console.log(`${x} + ${y}= ${s}`);


var raw_password= '12345'
console.log(new MD5().update(raw_password).digest('hex'))
