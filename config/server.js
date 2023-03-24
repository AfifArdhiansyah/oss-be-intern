const express = require('express');
const app = express();
const port = 3000;
const greetingRoute = require('../app/routers/greetingRoute');
const docRoute = require('../app/routers/docRoute');

app.use('/', greetingRoute);
app.use('/doc', docRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
