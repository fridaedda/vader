
async function login() {
    if (await isLoggedIn()) { return; }
    let user = prompt('Vad heter du?');
    await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    });
    renderLoggedIn(user);
    startConnection();
}

async function isLoggedIn() {
    let response = await fetch('/login');
    let data = await response.json();
    if (data.isLoggedIn) {
        renderLoggedIn(data.isLoggedIn);
        startConnection();
    }
    return data.isLoggedIn;
}

async function logout() {
    await fetch('/login', { method: 'DELETE' });
    location.reload();
}

function renderLoggedIn(user) {
    let div = document.createElement('div');
    div.innerHTML = 'Inloggad som ' + user +
        ' <button class="logout">Logga ut</button>';
    document.body.prepend(div);
}

document.body.addEventListener('click', (e) => {
    e.target.closest('.logout') && logout();
});

async function startConnection() {
    let connection = new EventSource("/message");
    connection.addEventListener('message', (event) => {
        let data = JSON.parse(event.data);
        let div = document.createElement('div');
        div.innerHTML = data.message;
        document.body.append(div);
    });
}

login();