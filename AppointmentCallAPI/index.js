// handleFormSubmit() is invoked when form is submitted in HTML
function handleFormSubmit(event) 
{
    // event.preventDefault() function prevents form action for a moment while we manipulate data from input
    event.preventDefault();

    // user stores form inputs in the form { key : value} like an object
    const user = 
    {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };

    // storing user details to local storage, the email value is used as the key and the user object is stringified using JSON
    // localStorage.setItem(user.email, JSON.stringify(user)); // for storing in local storage

    axios.post('https://crudcrud.com/api/8cca9a0745bf49c49e12187e31042c34/appointmentData', user)
    .then((response)=>{
        displayUser(response.data);
        // console.log(response.data);
    })
    .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>";
        console.log(error);
    });

    // display user information on landing page
    // displayUser(user);

    // once user details saved in local storage and displayed on screen we clear input area on the landing page
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
  
function displayUser(user) 
{
    // create new element <li></li> to show user details on landing page
    const newElement = document.createElement("li");

    // adding user details to newly created <li> element
    newElement.appendChild(document.createTextNode(` ${user.username} - ${user.email} - ${user.phone}`));
  
    // adding delete button in <li> element for removing users
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    newElement.appendChild(deleteButton);

    // adding an edit button in <li> element for editing user details
    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    newElement.appendChild(editButton);

    // adding new <li> element to <ul> list
    const userList = document.querySelector("ul");
    userList.appendChild(newElement);

    // once delete button is clicked removing user details from display and local storage
    deleteButton.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement); // removing corresponding <li>
      localStorage.removeItem(user.email);              // removing user details from local storage corresponding to the user email
    });
  
    // once edit button is clicked removing corresonding user details from local storage & display list ->
    //-> and showing out the input fields for editing with details fetched from local storage of the user

    editButton.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(user.email);
      document.getElementById("username").value = user.username;
      document.getElementById("email").value = user.email;
      document.getElementById("phone").value = user.phone;
    });
}