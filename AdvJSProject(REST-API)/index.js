async function addCandy() {
    const candyName = document.getElementById("candyName").value;
    const candyDescription = document.getElementById("candyDescription").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (!candyName || !candyDescription || !price || !quantity) {
        alert('Please fill in all fields.');
        return;
    }

    const candy = { candyName, candyDescription, price, quantity };

    try {
        await axios.post('https://crudcrud.com/api/d06936507aed4bf5aa50cc1f3c7df0a1/candyData', candy);
        displayCandies();
    } catch (error) {
        console.error(error);
    }
}

async function displayCandies() {
    const candyList = document.getElementById('candyTableBody');

    try {
        const response = await axios.get('https://crudcrud.com/api/d06936507aed4bf5aa50cc1f3c7df0a1/candyData');
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
    } catch (error) {
        console.error(error);
    }
}

async function updateQuantity(candy, quantity) {
    const newQuantity = candy.quantity - quantity;

    if (newQuantity >= 0) {
        try {
            await axios.put(`https://crudcrud.com/api/d06936507aed4bf5aa50cc1f3c7df0a1/candyData/${candy._id}`, {
                candyName: candy.candyName,
                candyDescription: candy.candyDescription,
                price: candy.price,
                quantity: newQuantity
            });
            try {
                if(newQuantity===0){
                await axios.delete(`https://crudcrud.com/api/d06936507aed4bf5aa50cc1f3c7df0a1/candyData/${candy._id}`);
                }
                displayCandies();
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        alert(`Please check again! Can't go items lower than 0, you're tring to buy ${quantity} quantity which is more than available`);
    }
}

displayCandies();
