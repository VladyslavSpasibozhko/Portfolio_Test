const showForm = document.getElementById('sing_up');
const signUpButton = document.getElementById('sign_up_button');
const form = document.getElementById('order_form');
const checkbox = document.getElementById('checkbox');
const closeBtn = document.getElementById('close_button');


const showOrderForm = () => {
	form.classList.toggle('show');
	form.classList.toggle('hide');
};

const closeForm = (e) => {
	e.preventDefault();
	form.classList.remove('show');
	form.classList.add('hide');
};

const btnChangeColor = () => {
	checkbox.checked ? signUpButton.classList.toggle('effect_hover_btn') : signUpButton.classList.toggle('effect_hover_btn');
};

checkbox.addEventListener('click', btnChangeColor)
closeBtn.addEventListener('click', closeForm);
showForm.addEventListener('click', showOrderForm);