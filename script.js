const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');

function clicarBotao(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', clicarBotao);
