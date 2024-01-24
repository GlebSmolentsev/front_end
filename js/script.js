


let inputName = document.querySelector('.input-name')

// console.log(inputName)


let inputEmail = document.querySelector('.input-email')

let formButton = document.querySelector('.form-button')

let textareaMessage = document.querySelector('.textarea-message')



// let inputNameValue = document.querySelector('.input-name-value')


const userObj = {
	name: null,
	email: null,
	text: null,
}

function nameData(event) {
	userObj.name = event.target.value
}

inputName.addEventListener('input', nameData)

function emailData(event) {
	userObj.email = event.target.value
}
inputEmail.addEventListener('input', emailData)

function messageData(event) {
	userObj.text = event.target.value
}
textareaMessage.addEventListener('input', messageData)




function onClick() {
	console.log(userObj.name)

	if (userObj.name) {
		console.log(userObj)
	} else {
		console.log('Нет данных в name')
	}

}



formButton.addEventListener('click', onClick)



















