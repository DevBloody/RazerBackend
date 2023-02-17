const axios = require('axios');

module.exports = (app, fs) => {
    app.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
        axios
            .get("https://api.nitestats.com/v1/epic/keychain", { timeout: 3000 })
            .then((response) => {
                res.json(response.data);
            })
            .catch((e) => {
                res.json([
                    "74AF07F9A2908BB2C32C9B07BC998560:V0Oqo/JGdPq3K1fX3JQRzwjCQMK7bV4QoyqQQFsIf0k=:Glider_ID_158_Hairy",
                ]);
            });
    });
}