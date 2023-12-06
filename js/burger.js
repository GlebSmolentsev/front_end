console.log('burger')


let burgerWrap = document.querySelector('.menu-burger__button')

let burgerLinksWrap = document.querySelector('.menu-burger__links')



let toggle = false

burgerWrap.addEventListener('click', function () { 
	if (toggle == false) { 

		burgerLinksWrap.classList.add('active')

		toggle = true
	} else {
		
		burgerLinksWrap.classList.remove('active')

		toggle = false
	}

})






// click: Срабатывает при клике на элементе.
// mouseenter: Происходит при наведении курсора на элемент.
// mouseleave: Срабатывает, когда курсор покидает область элемента.
