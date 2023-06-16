let lastMessageFromClient = '';
let commands = '/vreau';

// Funcție pentru afișarea unui mesaj în chat
function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('li');
    messageElement.className = 'message';
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
  }
  
  function initializeChat() {
    displayMessage("Bun venit! Vă punem la dispoziție următoarele opțiuni pentru comandă: apă, ceai, cafea. Tastați mai jos opțiunea dorită.");
  }




// Funcție pentru verificarea validității mesajului
function isValidMessageForWhatIWant(message) {
    const validOptions = ["ceai", "cafea", "suc", "apa"]; // Opțiunile valide
  
    // Verifică dacă mesajul începe cu "/vreau"
    if (message.startsWith("/vreau")) {
      const selectedOption = message.split("/")[2]; // Obține opțiunea selectată

      // Verifică dacă opțiunea selectată se regăsește în opțiunile valide
      if (validOptions.includes("/" + selectedOption)) {
        return true; // Mesajul este valid
      } else if (selectedOption === "cafea") {
        // Dacă opțiunea selectată este "cafea", afișează subopțiunile valide
        const subOptions = ["/costa", "/lavazza", "/doncaffe", "/jacobs"];
  
        // Verifică dacă mesajul conține o subopțiune validă
        if (subOptions.includes(message)) {
          return true; // Mesajul este valid
        }
      }
    }
    else {
      const selectedOption = message.split("/")[1];

      if (validOptions.includes("/" + selectedOption)) {
        return true;
      } else if (selectedOption === "cafea") {
        const subOptions = ["/costa", "/lavazza", "/doncaffe", "/jacobs"];
        if (subOptions.includes(message)) {
          return true;
        }

      }
    }
  
    return false; // Mesajul nu este valid
  }



function handleCommand(message) {

  if (lastMessageFromClient == ''){

    if (message == "apa") {

      commands = commands + '/' + message;
      lastMessageFromClient = message;
      displayMessage("Ați ales să comandați " + message + ". Comanda va ajunge în cel mai scurt timp la dumneavoastră. Doriți să mai comandați ceva?");

    }

  }

  else {

    if (message == "apa") {

      commands = commands + '/' + message;
      lastMessageFromClient = message;
      displayMessage("Ați ales să comandați " + message + ". Comanda va ajunge în cel mai scurt timp la dumneavoastră. Doriți să mai comandați ceva?");

    }

  }

  if (lastMessageFromClient == "apa") {

    if (message == "Nu")
      displayMessage("Mulțumim! Comanda dumneavoastră este " + commands);

    else 
      if (message == "Da")

        displayMessage("Ați ales să mai comandați ceva. Opțiuni: apa, ceai, cafea");

      else

        displayMessage("Vă rugăm să introduceți un mesaj de tipul Da sau Nu.");

    }



}


  
  // Funcție pentru tratarea mesajelor de tip "cafea"
// function handleCafeaMessage(message) {
//     const subOptions = ["/costa", "/lavazza", "/doncaffe", "/jacobs"];
//     const subOptionsMessage = "Alege una din opțiunile următoare:\n" + subOptions.join("\n");
  
//     // Afișează mesajul cu opțiunile de submeniu
//     displayMessage(subOptionsMessage);
//   }


  // Funcție pentru tratarea trimiterii unui mesaj
function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); // Elimină spațiile de la început și de la sfârșit
    handleCommand(message);
  
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
  