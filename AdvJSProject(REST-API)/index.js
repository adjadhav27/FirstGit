function addCandy() {
    const candyName = document.getElementById("candyName").value;
    const candyDescription = document.getElementById("candyDescription").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (!candyName || !candyDescription || !price || !quantity) {
        alert('Please fill in all fields.');
        return;
    }

    const candy = { candyName, candyDescription, price, quantity };

    axios
        .post('https://crudcrud.com/api/eec62e7250ae45b68c2e31118a6a01cb/candyData', candy)
        .then((response) => {
            displayCandies();
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayCandies() {
    const candyList = document.getElementById('candyTableBody');
    
    axios
        .get('https://crudcrud.com/api/eec62e7250ae45b68c2e31118a6a01cb/candyData')
        .then((response) => {
            candyList.innerHTML = "";
                for(let i=0; i<response.data.length; i++){
                const candyItem = document.createElement('tr');

                candyItem.innerHTML = `<td style="word-wrap: break-word;">${response.data[i].candyName}</td>
                                        <td>${response.data[i].candyDescription}</td>
                                        <td>${response.data[i].price}</td>
                                        <td>${response.data[i].quantity}</td>`;
        
                 const buy1Button = document.createElement("button");
                 buy1Button.className = 'btn btn-sm btn-primary ';
                 buy1Button.innerText = 'Buy 1';
                 buy1Button.addEventListener("click", () => updateQuantity(response.data[i], 1));

                const buy2Button = document.createElement("button");
                 buy2Button.className = 'btn btn-sm btn-primary ';
                 buy2Button.innerText = 'Buy 2';
                 buy2Button.addEventListener("click", () => updateQuantity(response.data[i], 2));

                const buy3Button = document.createElement("button");
                 buy3Button.className = 'btn btn-sm btn-primary ';
                 buy3Button.innerText = 'Buy 3';
                 buy3Button.addEventListener("click", () => updateQuantity(response.data[i], 3));
        
                 const tdForBuy1  = document.createElement('td');
                 tdForBuy1.className = 'text-wrap';
                 tdForBuy1.appendChild(buy1Button);
             
                const tdForBuy2  = document.createElement('td');
                 tdForBuy2.className = 'text-wrap';
                 tdForBuy2.appendChild(buy2Button);
             
                const tdForBuy3  = document.createElement('td');
                 tdForBuy3.className = 'text-wrap';
                 tdForBuy3.appendChild(buy3Button);
        
                candyItem.appendChild(tdForBuy1);
                candyItem.appendChild(tdForBuy2);
                candyItem.appendChild(tdForBuy3);
        
                candyList.appendChild(candyItem);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateQuantity(candy, quantity) {
    const newQuantity = candy.quantity - quantity;
    if (newQuantity >= 0) {
        axios
            .put(`https://crudcrud.com/api/eec62e7250ae45b68c2e31118a6a01cb/candyData/${candy._id}`, { 
                candyName: candy.candyName, 
                candyDescription: candy.candyDescription,
                price: candy.price,    
            quantity: newQuantity })
            .then(() => {
                displayCandies();
            })
            .catch((error) => {
                console.log(error);
            });
    }else{
        alert("Please check again! Can't go items lower than 0");
    }
}

displayCandies();
