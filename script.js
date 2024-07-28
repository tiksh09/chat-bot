function startChat() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('chatScreen').style.display = 'block';
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user-message');
        document.getElementById('userInput').value = '';
        setTimeout(() => respondToMessage(userInput), 500);
    }
}

function appendMessage(message, className) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function respondToMessage(userInput) {
    let response = "I'm not sure how to respond to that.";
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
        response = 'Hello! How can I assist you today?';
    } else if (lowerCaseInput.includes('how are you')) {
        response = "I'm a bot, but I'm doing great! How about you?";
    } else if (lowerCaseInput.includes('name')) {
        response = "I'm ChatBot, your virtual assistant.";
    } else if (lowerCaseInput.includes('age')) {
        response = "I don't have an age, but I'm always here to help you.";
    } else if (lowerCaseInput.includes('favorite color')) {
        response = "I don't have a favorite color, but I like all of them!";
    } else if (lowerCaseInput.includes('help')) {
        response = "Sure! I can help you with general questions. What do you need help with?";
    } else if (lowerCaseInput.includes('weather')) {
        response = "I'm sorry, I can't check the weather right now, but you can check a weather app for up-to-date information.";
    }

    appendMessage(response, 'bot-message');
}