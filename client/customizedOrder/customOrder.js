let lastMessageFromClient = '';
let commands = '';
let zahar = false;
let lapte = false;

const teaList = [ "Jasmine", "Sencha",
    "Matcha", "Dragonwell", "Gunpowder", "White Tea",
    "Shou Mei", "Ceylon White", "Black Tea", "Nimbu", "Earl Grey", "Darjeeling"];

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


function checkMessage(message) {

    for (let i = 0; i < teaList.length; i++) {
        if(teaList[i] == message)
            return true;
    }
    return false;
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
                    commands= commands + message;
                    displayMessage("Comandă primită!");
                    displayMessage(commands);
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
                    zahar = false;
                    lapte = false;
                    initializeChat();
                }
                else{
                    if (message == "Nu"){
                        displayMessage("Sperăm ca v-am fost de folos! Comanda este următoarea:");
                        commands= commands + message;
                        displayMessage(commands);

                    }
                }
            }

            else{
                if (lastMessageFromClient == "/ceai") {
                    if (teaList.includes(message)){

                        displayMessage("Eu: " + message);
                        lastMessageFromClient = message;
                        commands = commands + '/' + message;
                        displayMessage("Dacă aveți și alte preferințe la ceai, tastați ?");
                        displayMessage("Dacă nu aveți preferințe, atunci tastați -");
                    }
                }

                else{
                    if (teaList.includes(lastMessageFromClient)){

                        if (message == "?"){
                            displayMessage("Eu: " + message);
                            lastMessageFromClient = message;
                            commands = commands + '/' + message;

                            displayMessage("Puteți alege următoarele opțiuni: /zahar, /lapte");
                        }
                        else {

                            if(message == "-"){
                                displayMessage("Eu: " + message);
                                lastMessageFromClient = message;
                                commands = commands + '/' + '? ' + message;
                                displayMessage ("Comanda primită!");
                                displayMessage(commands);
                                lastMessageFromClient = "primit";
                                displayMessage("Doriți să mai comandați ceva?");
                            }
                        }

                    }
                    else{

                        if (lastMessageFromClient == "?") {
                            if (message == "/zahar" && zahar == false) {

                                displayMessage("Eu: " + message);
                                commands = commands + message;
                                zahar = true;
                                if (lapte == false) {
                                    displayMessage("Dacă doriți și lapte, tastați /lapte");
                                    displayMessage("Dacă nu, tastați done");
                                }
                                if(lapte == true && zahar == true){
                                    displayMessage("Comandă primită!");
                                    displayMessage(commands);


                                    lastMessageFromClient = "primit";
                                    displayMessage("Doriți să mai comandați ceva?");
                                }

                            }

                            else {
                                if (message == "/lapte" && lapte == false) {

                                    displayMessage("Eu: " + message);
                                    commands = commands + message;
                                    lapte = true;
                                    if (zahar == false){
                                        displayMessage("Dacă doriți și zahar, tastați /zahar");
                                        displayMessage("Dacă nu, tastați done");
                                    }
                                    if(lapte == true && zahar == true){
                                        displayMessage("Comandă primită!");
                                        displayMessage(commands);

                                        lastMessageFromClient = "primit";
                                        displayMessage("Doriți să mai comandați ceva?");
                                    }
                                }
                                else {
                                    if (message == "done"){
                                        displayMessage("Comandă primită!");
                                        displayMessage(commands);

                                        lastMessageFromClient = "primit";
                                        displayMessage("Doriți să mai comandați ceva?");
                                    }
                                }
                            }

                        }

                        else {
                            if (lastMessageFromClient == "/vezi") {
                                if (message == "/produse") {

                                    displayMessage("Eu: " + message);
                                    lastMessageFromClient = message;
                                    commands = commands + message;
                                    displayMessage("Aici puteți vizualiza: /meniu, /stoc, /cos, /favorite");

                                }
                                else {
                                    if (message == "/mese-libere"){
                                        displayMessage("Eu: " + message);
                                        lastMessageFromClient = message;
                                        commands = commands + message;
                                        displayMessage("Rezolvat!");
                                        displayMessage(commands);
                                        lastMessageFromClient = "primit";


                                        displayMessage("Doriți să realizați o altă comandă?");
                                    }

                                    else{
                                        if (message == "/galerie"){
                                            displayMessage("Eu: " + message);
                                            lastMessageFromClient = message;
                                            commands = commands + message;
                                            displayMessage("Rezolvat!");
                                            lastMessageFromClient = "primit";
                                            displayMessage(commands);

                                            displayMessage("Doriți să realizați o altă comandă?");
                                        }
                                        else{

                                            if(message == "/nota-plata"){
                                                displayMessage("Eu: " + message);
                                                lastMessageFromClient = message;
                                                commands = commands + message;
                                                displayMessage("Rezolvat!");
                                                lastMessageFromClient = "primit";
                                                displayMessage(commands);

                                                displayMessage("Doriți să realizați o altă comandă?");
                                            }

                                            else{
                                                if(message == "home"){
                                                    displayMessage("Eu: " + message);
                                                    lastMessageFromClient = message;
                                                    commands = commands + message;
                                                    displayMessage("Rezolvat!");
                                                    lastMessageFromClient = "primit";
                                                    displayMessage(commands);

                                                    displayMessage("Doriți să realizați o altă comandă?");
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            else {
                                if (lastMessageFromClient == "/produse") {

                                    if (message == "/cos" || message == "/favorite" || message == "/meniu" || message == "/stoc"){
                                        displayMessage("Eu: " + message);
                                        lastMessageFromClient = message;
                                        commands = commands + message;
                                        displayMessage("Rezolvat!");
                                        displayMessage(commands);
                                        lastMessageFromClient = "primit";
                                        displayMessage("Doriți să realizați o altă comandă?");

                                    }
                                }
                            }
                        }
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
