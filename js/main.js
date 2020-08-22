const buttonToTop = document.getElementById('button_to_top');
const ruButton = document.querySelector('.ru');
const engButton = document.querySelector('.eng');
const ruMenu = document.querySelector('.main_menu_ru');
const engMenu = document.querySelector('.main_menu_eng');
const mobileMenu = document.querySelector('.main_menu_mobile');

const toTop = () => {
	if (window.pageYOffset > 0) {
		window.scrollBy(0,-100);
		setTimeout(toTop, 10);
	}
}
buttonToTop.addEventListener('click', toTop);

const showButtonToTop = () => {
	let scrolled = window.pageYOffset;
	let coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		buttonToTop.classList.add('showButton');
		buttonToTop.classList.remove('no-display');
	} else {
		buttonToTop.classList.remove('showButton');
		buttonToTop.classList.add('no-display');
	}
};
document.addEventListener('scroll',showButtonToTop)

function changeLanguage (e) {
	let currentBtn = e.target.dataset.value;

	if (currentBtn === 'ru') {
		ruButton.classList.add('active');
		engButton.classList.remove('active');
		engMenu.classList.remove('showEngMenu');
		ruMenu.classList.remove('hideRuMenu');
		engMenu.classList.add('hideEngMenu');
		ruMenu.classList.add('showRuMenu');
	} else {
		ruButton.classList.remove('active');
		engButton.classList.add('active');
		engMenu.classList.remove('hideEngMenu');
		ruMenu.classList.remove('showRuMenu');
		engMenu.classList.add('showEngMenu');
		ruMenu.classList.add('hideRuMenu');
	}
}
engButton.addEventListener('click', changeLanguage);
ruButton.addEventListener('click', changeLanguage)

function showMenuForMobile (e) {
	if (e.target.dataset.state === 'unactive') {
		engMenu.style.display='block';
		ruMenu.style.display='block';
		e.target.dataset.state = 'active';
	} else {
		engMenu.style.display='none';
		ruMenu.style.display='none';
		e.target.dataset.state = 'unactive';
	}
}
mobileMenu.addEventListener('click', showMenuForMobile)



 