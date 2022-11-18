require('dotenv').config();
const cors = require('cors');
const express = require('express')

const app = express();
app.use(cors({
    origin: '*'
}))

app.get("/env", (request, response) => {
    response.json({ key: process.env.KEY });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listen on the port ${PORT}`));