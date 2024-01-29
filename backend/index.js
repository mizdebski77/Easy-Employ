const express = require("express");
const cors = require("cors");
const offers = require("./offers");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(offers)
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));