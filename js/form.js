
export function form() {
	console.log('script Form')


	// Объект в который мы сохраняем введенные данные в поля name, e-meil, textarea
	const userObj = {
		name: '',
		email: '',
		text: '',
	}

	let inputName = document.querySelector('.input-name')
	let inputEmail = document.querySelector('.input-email')
	let formButton = document.querySelector('.form-button')
	let textareaMessage = document.querySelector('.textarea-message')


	formButton.classList.add('disabled')

	formButton.setAttribute('disabled', 'true')


	function checkingData() {
		if (userObj.name.trim() && userObj.email.trim()) {
			formButton.classList.remove('disabled')
			formButton.removeAttribute('disabled', 'true')
		} else {
			formButton.classList.add('disabled')
			formButton.setAttribute('disabled', 'true')
		}
	}

 //Функция "nameData", которая обрабатывает введенные данные записывая их в объект userObj в поле "name"
	function nameData(event) {
		console.log('function nameData')
		userObj.name = event.target.value
		inputName.classList.remove('error')
		// 
		checkingData()
	}
	// Подключаем обработчик события на введения символов в поле input "name"
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
			formButton.removeAttribute('disabled', 'true')
			console.log(userObj);
		} else {
			if (userObj.name) {
			} else {
				inputName.classList.add('error')
			}
			if (userObj.email) {
			} else {
				inputEmail.classList.add('error')
			}

		}
	}


	formButton.addEventListener('click', onClick)
}

