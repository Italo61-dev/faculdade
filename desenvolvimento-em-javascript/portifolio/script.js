document.getElementById("emailForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var emailInput = document.getElementById("email");
      var email = emailInput.value;
    
      if (validateEmail(email)) {
        showMessage("E-mail válido!");
      } else {
        showMessage("E-mail inválido. O e-mail deve estar no formato nome@dominio.com.");
      }
    });
    
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function showMessage(message) {
      var messageElement = document.getElementById("message");
      messageElement.textContent = message;
    }
  