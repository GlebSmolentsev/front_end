import { form } from './js/form.js' 
import { burgerMenu } from './js/burger.js'


function contentLoadedDOM() {


	form()
	burgerMenu()

}

document.addEventListener('DOMContentLoaded', contentLoadedDOM)





// let carsData = { car: 'BMW', model: 'M5' }
// let jsonMy = JSON.stringify(carsData)
// localStorage.setItem('cars', jsonMy)
// const testBtn = document.querySelector('#get-localstorage')
// testBtn.addEventListener('click', () => {
// 	let dataJSON = localStorage.getItem('cars')
// 	let dataObj = JSON.parse(dataJSON)
// 	console.log(dataObj)
// })





















