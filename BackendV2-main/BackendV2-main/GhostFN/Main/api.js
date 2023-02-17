module.exports = (app, fs) => {
    app.get("/fortnite/api/v2/versioncheck/Windows", async (req, res) => {
        res.json({ type: "NO_UPDATE" })
    });

    app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId", async (req, res) => {
        res.set("Content-Type", "text/plain");
        res.send(true);
    });

    app.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
        res.json([]);
    });

    app.post("/fortnite/api/game/v2/grant_access/:accountId", (req, res) => {
        res.status(204).end();
    });

    app.get("/account/api/epicdomains/ssodomains", (req, res) => {
        res.json([
            "unrealengine.com",
            "unrealtournament.com",
            "fortnite.com",
            "epicgames.com"
        ])
    })
    
    app.get("/launcher/api/public/distributionpoints/", (req, res) => {
        res.json({
            "distributions": [
                "https://epicgames-download1.akamaized.net/",
                "https://download.epicgames.com/",
                "https://download2.epicgames.com/",
                "https://download3.epicgames.com/",
                "https://download4.epicgames.com/",
                "https://fastly-download.epicgames.com/"
            ]
        });
    })
    
}