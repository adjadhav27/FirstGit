function handleFormSubmit(event){
    event.preventDefault();
  
    localStorage.setItem('Username', event.target.username.value);
    localStorage.setItem('Email', event.target.email.value);
    localStorage.setItem('Phone Number', event.target.phoneNumber.value);
  }