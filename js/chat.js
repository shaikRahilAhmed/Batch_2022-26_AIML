
// Chat functionality

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!messageInput.value.trim()) return;
    
    // Get current time
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `
      <div class="message-sender">You</div>
      <div class="message-content">${messageInput.value}</div>
      <div class="message-time">${timeString}</div>
    `;
    
    // Add to chat
    chatMessages.appendChild(messageDiv);
    
    // Clear input
    messageInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate response (demo only)
    setTimeout(() => {
      const responseDiv = document.createElement('div');
      responseDiv.className = 'message received';
      responseDiv.innerHTML = `
        <div class="message-sender">Bot</div>
        <div class="message-content">This is a demo chat. In a real implementation, messages would be processed by a server.</div>
        <div class="message-time">${hours}:${(parseInt(minutes) + 1).toString().padStart(2, '0')}</div>
      `;
      
      chatMessages.appendChild(responseDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
  
  // Add event listener for enter key in message input
  document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
      messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });
    }
  });
  