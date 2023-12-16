const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = "brown";

const fruits = document.querySelectorAll('.fruits');
for(let k=0; k<fruits.length; k++){
fruits[k].style.backgroundColor = 'gray';
fruits[k].style.padding = '30px'; 
fruits[k].style.margin = '30px';  
fruits[k].style.width = '50%';    
fruits[k].style.borderRadius = '5px'; 	
fruits[k].style.listStyleType = 'none';
}
const fruitItems = document.querySelectorAll('.fruit');
for(let i=0; i<fruitItems.length; i++){
fruitItems[i].style.backgroundColor = 'lightgray';
fruitItems[i].style.padding = '10px';
fruitItems[i].style.margin = '10px';
fruitItems[i].style.borderRadius = '10px';
}

const fruitItems2 = document.querySelector('.fruit:nth-child(2)');
fruitItems2.style.backgroundColor = 'brown';
fruitItems2.style.color = 'white';

const fruitItems3 = document.querySelector('.fruit:nth-child(4)');
fruitItems3.style.backgroundColor = 'brown';
fruitItems3.style.color = 'white';

const fruitItems4 = document.querySelectorAll('.fruit:nth-child(even)');
for(let z=0; z<fruitItems4.length; z++){
 fruitItems4[z].style.backgroundColor = 'brown';
 fruitItems4[z].style.color = 'white'; 
}