let attempts = 0;
const maxAttempts = 3;
const lockoutDuration = 60000; // 1 minute
let lockoutTimer;

function login() {
    if (lockoutTimer) {
        document.getElementById('message').innerText = 'Account is locked. Please try again later.';
        return;
    }

    const password = document.getElementById('password').value;
    if (password === 'yourpassword') {
        document.getElementById('login-screen').style.display = 'none';
        setTimeout(() => {
            document.getElementById('desktop').style.display = 'block';
        }, 200);
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            document.getElementById('message').innerText = `Account locked. Try again in 1 minute.`;
            lockoutTimer = setTimeout(() => {
                attempts = 0;
                lockoutTimer = null;
                document.getElementById('message').innerText = '';
            }, lockoutDuration);
        } else {
            document.getElementById('message').innerText = `Incorrect password. You have ${maxAttempts - attempts} attempt(s) left.`;
        }
    }
}

function openWhatsApp() {
    document.getElementById('whatsapp-window').style.display = 'flex';
}

function closeWhatsApp() {
    document.getElementById('whatsapp-window').style.display = 'none';
}

async function loadMessages(contact) {
    const response = await fetch(`${contact}.json`);
    const data = await response.json();
    return data.messages;
}

async function showMessages(contact) {
    const messageHistory = document.getElementById('message-history');
    const messages = await loadMessages(contact);

    messageHistory.innerHTML = messages.map(message => {
        const time = new Date(message.timestamp).toLocaleTimeString();
        return `<p><strong>${message.sender}:</strong> ${message.message} <span style="font-size: 0.8em; color: grey;">${time}</span></p>`;
    }).join('');
}