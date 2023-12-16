const h3Tag = document.createElement('h3');
const p_Tag = document.createElement('p');

const subHeadingText = document.createTextNode('Buy high quality organic fruits online');
h3Tag.appendChild(subHeadingText);
h3Tag.setAttribute('style', 'font-style:italic;');

const p_Text = document.createTextNode('Total fruits: 4');
p_Tag.appendChild(p_Text);

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
divs[0].appendChild(h3Tag);

const secondDiv = divs[1];
const beforeList = document.querySelector('.fruits');
secondDiv.insertBefore(p_Tag, beforeList);
p_Tag.id = 'fruits-total';