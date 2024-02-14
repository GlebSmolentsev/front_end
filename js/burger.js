console.log('burger')



export function burgerMenu() { 


	let body = document.querySelector('body')
	let burgerWrap = document.querySelector('.menu-burger__button')
	let burgerLinksWrap = document.querySelector('.menu-burger__links')
	

	//*** menu links

	let homeLink = document.querySelector('.home-link')

	let contactsLink = document.querySelector('.contacts-link')


	homeLink.addEventListener('click', onClickHandler)

	contactsLink.addEventListener('click', onClickHandler)



	let toggle = false

	function onClickHandler() {

		if (toggle == false) {

			burgerLinksWrap.classList.add('active')
			body.style.overflow = 'hidden'
			toggle = true
			burgerWrap.classList.add('active')
		} else {

			burgerLinksWrap.classList.remove('active')
			body.style.overflow = 'scroll'
			toggle = false
			burgerWrap.classList.remove('active')
		}

	}




 // Событие клика 
	burgerWrap.addEventListener('click', onClickHandler)

}








// click: Срабатывает при клике на элементе.
// mouseenter: Происходит при наведении курсора на элемент.
// mouseleave: Срабатывает, когда курсор покидает область элемента.
