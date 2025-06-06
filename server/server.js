require('dotenv').config();
const { SERVER_PORT } = process.env;
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
