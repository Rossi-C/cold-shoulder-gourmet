require('dotenv').config();
const path = require('path')
const cors = require('cors');
const express = require('express')

const app = express();
app.use(cors({
    origin: '*'
}))

app.get("/env", (request, response) => {
    response.json({ key: process.env.KEY });
});

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(express.static("../client/public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listen on the port ${PORT}`));