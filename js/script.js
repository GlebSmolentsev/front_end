


let inputName = document.querySelector('.input-name')

console.log(inputName)


let inputEmail = document.querySelector('.input-email')

let formButton = document.querySelector('.form-button')



// let inputNameValue = document.querySelector('.input-name-value')


let userName = null

inputName.addEventListener('input', function (event) {
	console.log(event)
	// userName = event.target.value
	// console.log(userName)
})

let userEmail = null

inputEmail.addEventListener('input', function(event) {
    userEmail = event.target.value
	console.log(userEmail)
})



formButton.addEventListener('click', function () {

	console.log(userName, 'Name')
	console.log(userEmail, 'Email')

})

console.log(userName, 'Name')
console.log(userEmail, 'Email')















