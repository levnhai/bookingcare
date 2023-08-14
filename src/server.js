const express = require('express');

const viewEngine = require('../src/config/viewEngine');
const router = require('../src/route');
const connectBD = require('../src/config/connectDB');
const cors = require('cors')

require('dotenv').config();

let app = express();

app.use(cors({ credentials: true, origin: true }));


let port = process.env.PORT || 3001;

// config app
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

router(app);
viewEngine(app);    

connectBD();

app.listen(port, () => {
    console.log(`backEnd nodejs App listening running on port ${port}`);
});
