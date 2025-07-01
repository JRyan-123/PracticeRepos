const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const fullImg = document.getElementById('full-img');

fullImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
	let boxWidth = (e.pageX - leftSpace) + "px";
	imgWrap.style.width = boxWidth;
});
