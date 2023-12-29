const newInputElement = document.createElement('input');
newInputElement.type = 'text';
newInputElement.placeholder = 'Fruit Description . . .';
newInputElement.id = 'description';
newInputElement.name = 'description';

const form = document.querySelector('form');
const button = document.querySelector('button');
form.insertBefore(newInputElement, button);

const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const newInput = document.getElementById('fruit-to-add');
  const newInput2 = document.getElementById('description');

  const p_Tag = document.createElement('p');
  const p_TagText = document.createTextNode(newInput2.value);
  p_Tag.style = "font-style: italic";
  p_Tag.appendChild(p_TagText);

  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(newInput.value);
   newLi.appendChild(newLiText);
   newLi.appendChild(p_Tag);
   newLi.className = 'fruit';

  const newDelete = document.createElement('button');
  const newDeleteText = document.createTextNode('x');
  newDelete.appendChild(newDeleteText);
  newDelete.className = 'delete-btn';
  newLi.appendChild(newDelete);
  fruits.appendChild(newLi);
  })

  fruits.addEventListener('click', function(event){
      if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
        }
    })

document.getElementById('filter').addEventListener('keyup', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.fruits li');
	for(let i=0; i<listItems.length; i++){
const currentFruitText =  listItems[i].firstChild.textContent.toLowerCase();
const currentFruitDescription = listItems[i].firstElementChild.firstChild.textContent.toLowerCase();   
	if((currentFruitText.indexOf(searchTerm) === -1) && (currentFruitDescription.includes(searchTerm) === false)){
		listItems[i].style.display = 'none';
	}else{
		listItems[i].style.display = 'flex';
		 }
	}
});