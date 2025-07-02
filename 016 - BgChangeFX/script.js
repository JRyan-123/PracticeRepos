const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const fullImg = document.getElementById('full-img');
const line = document.getElementById('line');


fullImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
	let boxWidth = (e.pageX - leftSpace) + "px";
	imgWrap.style.width = boxWidth;
	line.style.left = boxWidth;
});
