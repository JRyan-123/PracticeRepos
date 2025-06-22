
let scrollContainer = document.querySelector('.gallery');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');

scrollContainer.addEventListener('wheel', (evt) => {
	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;
	scrollContainer.style.scrollBehavior = "smooth";
})

nextBtn.addEventListener('click', function()  {
	scrollContainer.scrollLeft += 900;
	scrollContainer.style.scrollBehavior = "smooth";
});

prevBtn.addEventListener('click', function()  {
	scrollContainer.scrollLeft -= 900;
	scrollContainer.style.scrollBehavior = "smooth";
});