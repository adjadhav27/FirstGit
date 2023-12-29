function handleFormSubmit(event){
    event.preventDefault();
  
    const user = {
      username : event.target.username.value,
      email : event.target.email.value,
      phone : event.target.phone.value
    };
  
    localStorage.setItem('User Details', JSON.stringify(user));
    
    console.log(JSON.parse(localStorage.getItem('User Details')).username);
  }