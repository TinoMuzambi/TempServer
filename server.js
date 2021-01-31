cont express = require("express");

// Setup
const app = express()

// Middlewares
app.use(express.json());
app.use(cors());

