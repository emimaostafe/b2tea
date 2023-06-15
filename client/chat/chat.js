// Funcție pentru afișarea unui mesaj în chat
function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('li');
    messageElement.className = 'message';
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
  }
  
  // Funcție pentru verificarea validității mesajului
function isValidMessage(message) {
    const validOptions = ["/ceai", "/cafea", "/suc", "/apa"]; // Opțiunile valide
  
    // Verifică dacă mesajul începe cu "/vreau"
    if (message.startsWith("/vreau")) {
      const selectedOption = message.split("/")[2]; // Obține opțiunea selectată
  
      // Verifică dacă opțiunea selectată se regăsește în opțiunile valide
      if (validOptions.includes("/" + selectedOption)) {
        return true; // Mesajul este valid
      }
    }
  
    return false; // Mesajul nu este valid
  }
  
  
  // Funcție pentru tratarea trimiterii unui mesaj
  function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); // Elimină spațiile de la început și de la sfârșit
  
    if (isValidMessage(message)) { // Verifică dacă mesajul este valid
      displayMessage(message);
    } else {
      displayErrorMessage('Mesajul nu este valid.'); // Afișează eroarea în chat
    }
  
    messageInput.value = '';
  }
  
  // Funcție pentru afișarea unui mesaj de eroare în chat
  function displayErrorMessage(errorMessage) {
    const chatContainer = document.getElementById('chat-container');
    const errorElement = document.createElement('li');
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    chatContainer.appendChild(errorElement);
  }
  
  const chatForm = document.getElementById('chat-form');
  chatForm.addEventListener('submit', sendMessage);
  