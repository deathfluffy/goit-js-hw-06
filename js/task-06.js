const inputElement = document.getElementById("validation-input");

const handleBlur = (event) => {
  const requiredLength = parseInt(inputElement.getAttribute("data-length"));
  const inputValue = inputElement.value.trim().length;

  if (inputValue === requiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
};

inputElement.addEventListener("blur", handleBlur);
