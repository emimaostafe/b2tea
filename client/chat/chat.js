// Funcție pentru afișarea unui mesaj în chat
function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('li');
    messageElement.className = 'message';
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
  }
  
  // Funcție pentru tratarea trimiterii unui mesaj
  // Funcție pentru tratarea trimiterii unui mesaj
  function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); // Elimină spațiile de la început și de la sfârșit
  
    if (message !== '') { // Verifică dacă mesajul nu este gol
      displayMessage(message);
    }
  
    messageInput.value = '';
  }
  
  // Ascultă evenimentul de submit al formularului de chat
  const chatForm = document.getElementById('chat-form');
  chatForm.addEventListener('submit', sendMessage);