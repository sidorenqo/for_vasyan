function addGuest() {
    const nameInputElement = document.getElementById('name');
    const surnameInputlement = document.getElementById('surname');
    
    let name = nameInputElement.value;
    nameInputElement.value = '';
    
    let surname = surnameInputlement.value;
    surnameInputlement.value = '';

    let person = `${name} ${surname}`;
    let listItem = document.createElement("li");
    let addGuestList = document.createTextNode(person);
    listItem.appendChild(addGuestList);

    document.getElementById("list").appendChild(listItem);
}

document.addEventListener('keydown', function(event){
    if (event.code == 'Enter') {
        addGuest()
    }
  })