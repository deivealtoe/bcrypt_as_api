const express = require('express');
const routes = require('./routes/index');
const { catchAllErrors, notFoundError } = require('./middlewares/index');

const server = express();

server.use(express.json());

server.use(routes);

server.use(notFoundError);
server.use(catchAllErrors);

const host = '0.0.0.0';
const port = 3338

server.listen(port, host, () => {
    console.log(`Listening on port ${port}`);
});