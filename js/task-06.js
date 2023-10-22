const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function() {
  const dataLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValueLength = validationInput.value.length;

  if (inputValueLength === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
