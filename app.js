/* The "keys":
letter "e" for "enter"
letter "i" for "imes"
letter "a" for "ai"
letter "o" for "ober"
letter "u" for "ufat" */

const message = document.getElementById('message');
const resultMessage = document.getElementById("resultMessage"); 


let characters = [ 
                  ["e", "enter"], 
                  ["i", "imes"], 
                  ["a", "ai"],
                  ["o", "ober"], 
                  ["u", "ufat"],
];

let charactersEncrypt = [ 
    ["enter", "e"], 
    ["imes", "i"], 
    ["ai", "a"],
    ["ober", "o"], 
    ["ufat", "u"],
];

/* BTN Function */
function btnEncrypt() {
    const text = Encrypt(message.value); 
   /*  cleanTextArea(); */
    hideElements();
    console.log(text);
    resultMessage.value = text; 
}

function btnDecrypt(){
    const text = Decrypt(message.value);
    hideElements();
    resultMessage.value = text; 
    cleanTextArea();
} 


/* Encrypt */
function Encrypt(text){
    let MessageToEncrypt = removeAccents(text).toLowerCase();
    for(let i = 0; i < characters.length; i++){
        if(MessageToEncrypt.includes(characters[i][0])){
            MessageToEncrypt = MessageToEncrypt.replaceAll(
                characters[i][0],
                characters[i][1]
            );
        }
    }
    return MessageToEncrypt; 
}

/* Decript */
function Decrypt(text){
    let MessageToDecrypt = removeAccents(text).toLowerCase();
    for(let i = 0; i < charactersEncrypt.length; i++){
        if(MessageToDecrypt.includes(charactersEncrypt[i][0])){
            MessageToDecrypt = MessageToDecrypt.replaceAll(
                charactersEncrypt[i][0],
                charactersEncrypt[i][1]
            );
        }
    }
    return MessageToDecrypt; 
}

/* Copiar */
const btnCopy = document.getElementById('btn-copy');
const input = document.getElementById('resultMessage');

    btnCopy.addEventListener("click", function(){
        input.focus();
        cleanTextArea(); 
        document.execCommand('selectAll');
        document.execCommand('copy'); 
    }); 
    

/* Clean the text Area to add new lines */
function cleanTextArea() {
    document.getElementById('message').value = ""; 
}

/* Hide picture and initial text */
function hideElements(){
    document.getElementById('resultBoxInitial').hidden = true; 
    document.getElementById('btn-copy').hidden = false; 
    document.getElementById('resultMessage').hidden = false; 
}

function removeAccents (message){
return message.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
