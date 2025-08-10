const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const messagesDiv = document.getElementById('messages');

function addMessage(text, type) {
  const message = document.createElement('div');
  message.classList.add('message');
  message.classList.add(type);
  message.textContent = text;
  messagesDiv.appendChild(message);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'sent');
  input.value = '';

  // Simulate reply after 1 second
  setTimeout(() => {
    addMessage("This is a static reply.", 'received');
  }, 1000);
});

