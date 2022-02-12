const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require('cors')

app.use(cors())

const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
