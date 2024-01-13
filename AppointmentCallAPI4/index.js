function handleFormSubmit(event) {
    event.preventDefault();
  
    const user = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    axios
      .post('https://crudcrud.com/api/8cca9a0745bf49c49e12187e31042c34/appointmentData', user)
      .then((response) => {
        displayUser(response.data);
      })
      .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>";
        console.log(error);
      });
  
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  async function displayUsers() {
    try {
      const response = await axios.get('https://crudcrud.com/api/8cca9a0745bf49c49e12187e31042c34/appointmentData');
      for (let i = 0; i < response.data.length; i++) {
        displayUser(response.data[i]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function displayUser(user) {
    const newElement = document.createElement("li");
    newElement.appendChild(document.createTextNode(` ${user.username} - ${user.email} - ${user.phone}`));
  
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    newElement.appendChild(deleteButton);
  
    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    newElement.appendChild(editButton);
  
    const userList = document.querySelector("ul");
    userList.appendChild(newElement);
  
    deleteButton.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios
        .delete(`https://crudcrud.com/api/8cca9a0745bf49c49e12187e31042c34/appointmentData/${user._id}`)
        .catch((error) => {
          console.log(error);
        });
    });
  
    editButton.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios
        .delete(`https://crudcrud.com/api/8cca9a0745bf49c49e12187e31042c34/appointmentData/${user._id}`)
        .then(() => {
          document.getElementById("username").value = user.username;
          document.getElementById("email").value = user.email;
          document.getElementById("phone").value = user.phone;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  
  // Initializing the displayUsers function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    displayUsers();
  });