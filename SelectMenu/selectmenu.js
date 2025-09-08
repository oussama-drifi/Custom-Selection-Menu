const optionsContainer = document.querySelector(".options");
// normally load regions from database
const items = ["Casablanca-Settat", "Rabat-Salé", "Tanger-Tétouan", "Laayoune-Boujdour", "Sous-Massa"];
// render items
items.forEach(item => {
    const newItem = document.createElement("div");
    newItem.textContent = item;
    // add to options container
    optionsContainer.appendChild(newItem);
})

const input = document.getElementById("input");
const fieledContainer = document.querySelector(".fieled-container");
const options = document.querySelectorAll(".options > div");
const icon = document.querySelector(".selected-option span i");
const selectedOption = document.querySelector(".selected-option");
const displayedOption = document.querySelector(".selected-option .selected");


// when clicking select box
fieledContainer.addEventListener("click", event => {
    // if the select zone is clicked
    if(selectedOption.contains(event.target)){
        optionsContainer.classList.toggle("show-options");
        icon.classList.toggle("rotate");
    }
});
// when selecting an option
options.forEach(option => {
    option.addEventListener("click", event => {
        // hide the menu
        optionsContainer.classList.remove("show-options");
        // return the icon to initial state
        icon.classList.remove("rotate");
        // update the area shown input value
        displayedOption.textContent = option.textContent;
        // update the hidden input value
        input.value = displayedOption.textContent;
        // make the state active
        fieledContainer.style.borderColor = "rgb(115, 0, 255)";
    });
});
// close the menu when clicking outside the selection box
document.addEventListener("click", event => {
    if(!selectedOption.contains(event.target)){
        optionsContainer.classList.remove("show-options");
        icon.classList.remove("rotate");
    }
});