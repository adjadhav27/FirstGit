function addExpense() {
      const expenseAmount = document.getElementById("expenseAmount").value;
      const expenseDescription = document.getElementById("expenseDescription").value;
      const expenseCategory = document.getElementById("expenseCategory").value;

      if (!expenseAmount || !expenseDescription || !expenseCategory) {
        alert('Please fill in all fields.');
        return;
      }
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      expenses.push({ amount: expenseAmount, description: expenseDescription, category: expenseCategory });
      localStorage.setItem("expenses", JSON.stringify(expenses));

      displayExpenses();
    }
    function displayExpenses() {
      const expenseList = document.getElementById('expenseTableBody');
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

      expenseList.innerHTML = "";

      expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('tr');
        expenseItem.innerHTML = `<td style="word-wrap: break-word;">${expense.description}</td>
        <td>${expense.amount}</td>
        <td>${expense.category}</td>`;

        const editButton = document.createElement("button");
        editButton.className = 'btn btn-xs btn-primary ';
        editButton.innerText = " + ";
        editButton.addEventListener("click", () => editExpense(index));

        const deleteButton = document.createElement("button");
        deleteButton.className = 'btn btn-xs btn-danger';
        deleteButton.innerText = " X ";
        deleteButton.addEventListener("click", () => deleteExpense(index));

        const tdForEdit  = document.createElement('td');
        tdForEdit.className = 'text-wrap';
        tdForEdit.appendChild(editButton);
        const tdForDelete = document.createElement('td');
        tdForDelete.className = 'text-wrap';
        tdForDelete.appendChild(deleteButton);

        expenseItem.appendChild(tdForEdit);
        expenseItem.appendChild(tdForDelete);

        expenseList.appendChild(expenseItem);
      });
    }

    function deleteExpense(index) {
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      displayExpenses();
    }

    function editExpense(index) {
      const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
      const editedExpense = expenses[index];

      // Pre-filling form with existing expense details for editing
      document.getElementById("expenseAmount").value = editedExpense.amount;
      document.getElementById("expenseDescription").value = editedExpense.description;
      document.getElementById("expenseCategory").value = editedExpense.category;

      // Deleting the edited expense from the list
      deleteExpense(index);
    }

    displayExpenses();