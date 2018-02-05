let curry=require('lodash').curry
//首先柯里化两个纯函数
// var match = curry((reg, str) => str.match(reg));
//es5
var match=curry(function(reg,str){
   return str.match(reg)
})

// var filter = curry((f, arr) => arr.filter(f));
//es5
var filter=curry(function(f, arr){
	return arr.filter(f)
})

//判断字符串里有没有空格
var haveSpace = match(/\s+/g);

console.log(haveSpace("ffffffff"))
//=>null

console.log(haveSpace("a    b"))
//=>[" "]

var filterfn=filter(haveSpace);
console.log(filterfn(["abcefg", "Hello World"]));
//=>["Hello world"]



function CheckIfPrime(value, index, ar) {
    high = Math.floor(Math.sqrt(value)) + 1;

    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    } 
    return true;
}


// Create the original array.
var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];
// Get the prime numbers that are in the original array. 
var primes = numbers.filter(CheckIfPrime);

console.log(primes);
// Output: 31,37,41,43,47,53

function argumentsCeshi(){
	console.log(arguments)
	let aa=Array.prototype.slice.call(arguments, 0)
	console.log(aa)
}

argumentsCeshi(1,2)


var arrayLike = {
  '0' : 'a',
  '1' : 'b',
  '2' : 'c',
  'length': 3
}

var arr;
//ES5
arr = [].slice.call(arrayLike);    //arr=['a', 'b', 'c']
console.log(arr)

//ES6
arr = Array.from(arrayLike)
console.log(arr)


/*var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

console.log(compose((a)=>a,(b)=>b)(1,2))*/



//或者
var compose = (f, g) => (x => f(g(x)));

var add1 = x => x + 1;
var mul5 = x => x * 5;

console.log(compose(mul5, add1)(1));
// =>15 


