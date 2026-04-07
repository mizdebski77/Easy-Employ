const express = require("express");
const cors = require("cors");
const offers = require("./offers");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json(offers);
});

app.get("/Offer/:id", (req, res) => {
    const offerId = req.params.id;
    const offer = offers.find(o => o.id === offerId);

    if (!offer) {
        return res.status(404).json({ error: 'Offer not found' });
    }

    res.json(offer);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
