





// test1()

console.log('test1');



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







let inputName = document.querySelector('.input-name')

let inputEmail = document.querySelector('.input-email')

let formButton = document.querySelector('.form-button')
formButton.setAttribute('disabled', 'true')


let textareaMessage = document.querySelector('.textarea-message')



// let inputNameValue = document.querySelector('.input-name-value')


const userObj = {
	name: '',
	email: '',
	text: '',
}

function checkingData() { 

	if (userObj.name.trim() && userObj.email.trim()) {
		formButton.removeAttribute('disabled', 'true')
	} else {
		formButton.setAttribute('disabled', 'true')
	}

}




function nameData(event) {
	userObj.name = event.target.value
	inputName.classList.remove('error')
	checkingData()
}

inputName.addEventListener('input', nameData)

function emailData(event) {
	userObj.email = event.target.value
	inputEmail.classList.remove('error')
	checkingData()
}
inputEmail.addEventListener('input', emailData)

function messageData(event) {
	userObj.text = event.target.value
}
textareaMessage.addEventListener('input', messageData)




function onClick() {

	userObj.name = userObj.name.trim()
	userObj.email = userObj.email.trim()



	if (userObj.name && userObj.email) {
		console.log(userObj)
		formButton.removeAttribute('disabled', 'true')


	} else {

		if (userObj.name) {
			console.log('name', userObj.name)
		} else {
			inputName.classList.add('error')
			console.log(`Нет данных - name`)
		}

		if (userObj.email) {
			console.log('email', userObj.email)
		} else {
			inputEmail.classList.add('error')
			console.log(`Нет данных - email`)
		}

	}



}


console.log();



formButton.addEventListener('click', onClick)



















