const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = 'fruit';

  const deleteButton = document.createElement('button');
  const deleteText = document.createTextNode('X');
  deleteButton.appendChild(deleteText);
  deleteButton.className = 'delete-btn';

  const editButton = document.createElement('button');
  const editText = document.createTextNode('Edit');
  editButton.appendChild(editText);
  editButton.className = 'edit-btn';
  
  newLi.appendChild(deleteButton);
  newLi.appendChild(editButton);
  fruits.appendChild(newLi);
});

fruits.addEventListener('click', function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToRemove = event.target.parentElement;
    fruits.removeChild(fruitToRemove);
  };
});