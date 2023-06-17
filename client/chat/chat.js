let lastMessageFromClient = '';
let commands = '';
const teaList = [ " Jasmine\n ", " Sencha ", 
" Matcha ", " Dragonwell ", " Gunpowder ", " White Tea ", 
" Shou Mei ", " Ceylon White ", " Black Tea ", " Nimbu ", " Earl Grey ", " Darjeeling "];

// Funcție pentru afișarea unui mesaj în chat
function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('li');
    messageElement.className = 'message';
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
  }

  
  function initializeChat() {

    const chatElement = document.getElementById('chat-container');
    chatElement.innerHTML = '';
  
    displayMessage( "Bun venit! Vă punem la dispoziție următoarele comenzi: /vreau, /vezi. Tastați mai jos comanda dorită.");
  }
  
  

function HandleCommand(message) {

  if (lastMessageFromClient == '') {

    if (message == "/vreau") {

      displayMessage("Eu: " + message);
      lastMessageFromClient = message;
      commands = commands + message;
      displayMessage("Vă stăm la dispoziție cu urmatoarele opțiuni: /ceai, /alcool.");

    }
    else{

      if (message == '/vezi') {

        displayMessage("Eu: " + message);
        lastMessageFromClient = message;
        commands = commands + message;
        displayMessage("Vă stăm la dispoziție cu urmatoarele opțiuni: /produse, /mese-libere, /galerie, /home, /nota-plata.");

      }
    }
  }

  else {

    if (lastMessageFromClient == "/vreau") {
      if(message == "/ceai") {
        
        displayMessage("Eu: " + message);
        lastMessageFromClient = message;
        commands = commands + message;

        displayMessage("Alegeți ceaiul pe care doriți să îl comandați:");
        displayMessage(teaList);
      }
      else{
        if (message == "/alcool"){
          displayMessage("Comandă primită!");
          lastMessageFromClient = "primit";
          displayMessage("Doriți să mai comandați ceva?");
        }

      }
    }

    else {

      if (lastMessageFromClient == "primit") {

        if (message == "Da"){
          lastMessageFromClient = '';
          commands = '';
          initializeChat();
        }
        else{
          if (message == "Nu"){
            displayMessage("Sperăm ca v-am fost de folos!");
          }
        }
      }
    }
  }

}


  // Funcție pentru tratarea trimiterii unui mesaj
function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); // Elimină spațiile de la început și de la sfârșit
    HandleCommand(message);
  
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
  
  document.addEventListener('DOMContentLoaded', initializeChat);
  const chatForm = document.getElementById('chat-form');
  chatForm.addEventListener('submit', sendMessage);
  