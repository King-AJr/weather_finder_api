const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const requestIp = require('request-ip');
const helloRoute = require('./routes/hello');

dotenv.config();
const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(requestIp.mw());
app.use('/api/hello', helloRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
