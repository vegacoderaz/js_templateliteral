const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submitButton");
const nameDisplay = document.getElementById("nameDisplay");
const greetingMessage = document.getElementById("greetingMessage");

submitButton.addEventListener("click", function() {
    const name = nameInput.value;
    nameDisplay.textContent = `Hello, ${name}!`;
    greetingMessage.style.display = "block";
});