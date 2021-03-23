const express = require('express');
const { not_found, catch_all } = require('./handlers/errors');
const { router } = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

app.use(not_found);
app.use(catch_all);

module.exports = { app };
