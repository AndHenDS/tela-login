document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos.";
  }
});
