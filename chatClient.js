let websocket;

let login = prompt("Entrez votre login");


createWebSocket();

function createWebSocket(){
    websocket = new WebSocket('ws://localhost:12345');

    let button = document.getElementById('buttonSend');

    button.addEventListener("click", sendMessage);

    websocket.onmessage = function(event) {
        console.log(event.data);
        printMessage(event);
      }

}

function sendMessage(event){
    event.preventDefault();
    let msg = login + " : " + document.getElementById('messageBar').value;
    websocket.send(msg);

}

function printMessage(event){
  let data = event.data;
  let tchat = document.getElementById("textAreaChat");
  let oldData = document.getElementById("textAreaChat").value;
  tchat.setAttribute("disabled", false);
  if (data != ""){
      if (oldData != ""){
          tchat.innerHTML = oldData + "\n" + data;
          document.getElementById("messageBar").value = "";
          console.log('entre');
      }
      else {
          tchat.innerHTML = data;
          document.getElementById("messageBar").value = "";
      }
  }
}
