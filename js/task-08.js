const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при відправці форми

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    // Перевіряємо, чи всі поля заповнені
    alert("Усі поля повинні бути заповнені");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData); // Виводимо об'єкт із введеними даними в консоль
    loginForm.reset(); // Очищаємо значення полів форми
  }
});

