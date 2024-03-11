// Add your code here
function submitData(name, email) {
    // Define the data to be sent in the request body
    const data = {
      name: name,
      email: email
    };
  
    // Define the options for the fetch request
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    // Make the POST request
    return fetch('http://localhost:3000/users', requestOptions)
      .then(response => response.json())
      .then(jsonData => {
        // Access the newly converted object and find the new id
        const newId = jsonData.id;
        
        // Append the new id to the DOM
        document.body.innerHTML += `<p>New ID: ${newId}</p>`;

      })
      .catch(error => document.body.innerHTML +=`<p> ${error}</p>`);
      
  }
  submitData("Steve","steve@steve.com")

