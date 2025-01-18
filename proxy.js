// filepath: /c:/Users/kauam/OneDrive/Área de Trabalho/Direct Response/spy whats/parte 2/proxy.js
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/proxy', (req, res) => {
    const apiUrl = req.query.url;
    request(apiUrl).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});