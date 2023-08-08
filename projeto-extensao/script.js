const sugestaoForm = document.getElementById('sugestaoForm');

sugestaoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const sugestao = document.getElementById('sugestao').value;

  // Aqui você pode adicionar o código para enviar a sugestão para um servidor ou armazená-la localmente.

  alert('Sugestão enviada com sucesso! Obrigado por contribuir com a nossa comunidade.');
  sugestaoForm.reset();
});