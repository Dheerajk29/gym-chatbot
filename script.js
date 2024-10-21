document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        addBotMessage(getBotResponse(userInput));
        document.getElementById("user-input").value = ""; // Clear input
    }
});

function addUserMessage(message) {
    let messageElement = document.createElement("div");
    messageElement.className = "user-message";
    messageElement.innerText = message;
    document.getElementById("chat-body").appendChild(messageElement);
}

function addBotMessage(message) {
    let messageElement = document.createElement("div");
    messageElement.className = "bot-message";
    messageElement.innerText = message;
    document.getElementById("chat-body").appendChild(messageElement);
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("how are you")) {
        return "I'm just a bot, but I'm doing well! How can I assist you with your gym membership?";
    } else if (input.includes("what is ur name")) {
        return "I am your Gym Membership Assistant.";
    } else if (input.includes("i want to join")) {
        return "good idea";
    }else {
        return "I can help with membership details, please ask your question!";
    }
}
