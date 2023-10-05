const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert("All fields must be filled");
  } else {
    console.log(formDataObject);
    loginForm.reset();
  }
});
