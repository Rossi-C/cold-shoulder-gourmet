require('dotenv').config();
const path = require('path')
const cors = require('cors');
const express = require('express')

if(process.env.NODE_ENV !== 'dev'){
    require('@google-cloud/debug-agent').start({serviceContext: {enableCanary: true}});
}

const app = express();
app.use(cors({
    origin: '*'
}))

app.get("/env", (request, response) => {
    response.json({ key: process.env.KEY });
});

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
})

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listen on the port ${PORT}`));