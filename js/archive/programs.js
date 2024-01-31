// console.log('Prog');



// Programs #1

let num = 13


let btn13 = document.querySelector('.btn-num13')
let btn25 = document.querySelector('.btn-num25')
let btn40 = document.querySelector('.btn-num40')
let targetItem = document.querySelector('.target-item')


btn13.addEventListener('click', function () {
let arrayNumbers = []

for (let i = 1; i <= 13; i++) {
	
	arrayNumbers.push(i)
	
}

	targetItem.innerHTML = arrayNumbers
})



btn25.addEventListener('click', function () {

	let arrayNumbers = []

	for (let i = 1; i <= 25; i++) {
		arrayNumbers.push(i)
	}

	targetItem.innerHTML = arrayNumbers
})


btn40.addEventListener('click', function () {

	let arrayNumbers = []

	for (let i = 1; i <= 4000; i++) {
		arrayNumbers.push(i)
	}

	targetItem.innerHTML = arrayNumbers
})

// console.log(targetItem);












// let arrayNumbers = []

// for (let i = 1; i <= 13; i++) { 
// 	arrayNumbers.push(i)
// }

// console.log(arrayNumbers);