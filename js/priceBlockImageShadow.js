const LeftFirst = document.querySelector('.first_left_image');
const RightFirst = document.querySelector('.second_left_image');
const LeftSec = document.querySelector('.first_right_image');
const RightSec = document.querySelector('.second_right_image');
const priceBlock =document.querySelector('.price_block');
const imagePriceBlockCollection = priceBlock.querySelectorAll('.price_block_content_item_description');
const imageHover = document.querySelector('.background_for_image_hover');

const imageArr = [LeftFirst, RightFirst, LeftSec, RightSec];

imagePriceBlockCollection.forEach(item => {
	imageArr.push(item);
});

imageArr.map (item => {
	item.addEventListener('mouseover', ()=> {
		imageHover.style.display = 'block';
	});
	
	item.addEventListener('mouseout', ()=> {
		imageHover.style.display = 'none';
	});
});
