const express = require('express');
const session = require('express-session');
const app = express();

// serve static files
app.use(express.static('public'));
// body parser
app.use(express.json());

app.use(session({
    secret: 'something',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/login', (req, res) => {
    req.session.user = req.body.user;
    res.json({ ok: true });
});

app.get('/login', (req, res) => {
    res.json({ isLoggedIn: req.session.user });
});

app.delete('/login', (req, res) => {

    delete connectionMem[req.session.user];
    delete req.session.user;
    res.json({ loggedOut: true });
});

let connectionMem = {};

app.get('/message', (req, res) => {
    if (!req.session.user) {
        res.json({ error: 'Not logged in' });
        return;
    }
    res.writeHead(200, {
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    });
    connectionMem[req.session.user] = res;
});

app.listen(3080, () => console.log('Listening on port 3080'));
