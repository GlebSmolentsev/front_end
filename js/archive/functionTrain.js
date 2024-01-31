// 1) Function Declaration
function test1() {
	console.log('Function Declaration');
};

// 2) Function Expression
const test2 = function () {
	console.log('Function Expression')
};

// 3) IIFE (Immediately-invoked function expression)

(function () {
	console.log('Hello')
})();

// 4) Arrow Function
const test3 = () => console.log('Arrow Function')
