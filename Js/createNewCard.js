function createNewCard(name,address,gender,age,contact,imageUrl) {
    var cardContainer = document.getElementById("guide-c");

    var newCard = document.createElement("div");
    newCard.className = "card";

    var image = document.createElement("img");
    image.src = imageUrl;
    newCard.appendChild(image);

    var nameElement = document.createElement("p");
    nameElement.textContent = "Name: " + name;
    newCard.appendChild(nameElement);

    var addressElement = document.createElement("p");
    addressElement.textContent = "Address: " + address;
    newCard.appendChild(addressElement);

    var ageElement = document.createElement("p");
    ageElement.textContent = "Age: " + age;
    newCard.appendChild(ageElement);

    var genderElement = document.createElement("p");
    genderElement.textContent = "Gender: " + gender;
    newCard.appendChild(genderElement);

    var contactElement = document.createElement("p");
    contactElement.textContent = "Contact: " + contact;
    newCard.appendChild(contactElement);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
        // Remove the card from the container
        cardContainer.removeChild(newCard);
    });

    newCard.appendChild(deleteButton);

    // Append the new card to the card container
    cardContainer.appendChild(newCard);
}

    document.getElementById("btn-save-guide").addEventListener("click", function () {
        // Get the values from the input fields
        var name = document.getElementById("txt-guide-name").value;
        var address = document.getElementById("txt-guide-address").value;
        var age = document.getElementById("txt-guide-age").value;
        var gender = document.getElementById("txt-guide-gender").value;
        var contact = document.getElementById("txt-guide-contact").value;
        var imageUrl = document.getElementById("choose-guide-pic").value; // Replace with file input processing

        createNewCard(name, address, age, gender, contact, imageUrl);

        // Clear input fields
        document.getElementById("txt-guide-name").value = "";
        document.getElementById("txt-guide-address").value = "";
        document.getElementById("txt-guide-age").value = "";
        document.getElementById("txt-guide-gender").value = "";
        document.getElementById("txt-guide-contact").value = "";

    });