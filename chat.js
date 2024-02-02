const socket = io('http://localhost:3000');

// Obtener las referencias
const messageContainer = document.querySelector('#message-container');
const newMessageTextArea = document.querySelector('#new-message');
const sendButton = document.querySelector('#send-button');
const userNameInput = document.querySelector('#user-name');

const roomNameInput = document.querySelector('#room-name');
const joinRoomButton = document.querySelector('#join-room-button');

let currentRoom = ''; // Variable para almacenar la sala actual

//TODO: unirnos a un evento creado por el servidor que seria la sala a la cual nos queremos unir
sendButton.addEventListener('click', () => {
  const message = newMessageTextArea.value;
  const userName = userNameInput.value || 'Anónimo';

  socket.emit('chat message', {userName, message});

  // Limpiar el campo de texto para el prox message
  newMessageTextArea.value = '';
});

socket.on('chat message', (data) => {
  const messageElement = document.createElement('div');
  // <div></div>
  messageElement.innerText = `${data.userName} dice: ${data.message}`;
  messageContainer.appendChild(messageElement);
})
