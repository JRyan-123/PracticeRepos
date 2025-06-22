const selectField = document.getElementById('selectField');
const selected = document.getElementById('selected');
const list = document.getElementById('list');
const options =  document.getElementsByClassName('options')
const hero = document.querySelector('.hero');
const arrowIcon = document.getElementById('arrowIcon');

let idColor = "";


selectField.addEventListener('click', function () {
	list.classList.toggle('hide');
	arrowIcon.classList.toggle('rotateIcon');
	hero.classList.remove(idColor);
});


for ( let option of options){
	option.addEventListener('click', function() {
		selected.innerHTML = this.textContent;	
		list.classList.toggle('hide');
		idColor = this.id;
		hero.classList.add(idColor);
		arrowIcon.classList.toggle('rotateIcon');
	});
}
