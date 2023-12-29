function handleFormSubmit(event) 
{
    event.preventDefault();
    const userDetails = 
    {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
        localStorage.setItem(userDetails.email, JSON.stringify(userDetails));

    displayUserOnScreen(userDetails);

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
  
function displayUserOnScreen(userDetails) 
{
    const userItem = document.createElement("li");

    userItem.appendChild(
      document.createTextNode(
       ` ${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

}