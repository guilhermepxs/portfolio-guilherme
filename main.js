const toggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    themeIcon.src = "moon.png"; 
    document.body.classList.toggle("dark-theme");
  } else {
    themeIcon.src = "sun.png";
    document.body.classList.toggle("dark-theme");

  }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('formError');

    errorElement.style.display = 'none';

    if (name === '') {
        errorElement.innerText = 'Por favor, insira seu nome.';
        errorElement.style.display = 'block';
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorElement.innerText = 'Por favor, insira um e-mail válido.';
        errorElement.style.display = 'block';
        return false;
    }

    if (message === '') {
        errorElement.innerText = 'Por favor, insira sua mensagem.';
        errorElement.style.display = 'block';
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}


