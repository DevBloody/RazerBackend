module.exports = (app, fs) => {
    app.get("/lightswitch/api/service/bulk/status", async (req, res) => {
        res.json([
            {
                serviceInstanceId: "Fortnite",
                status: "UP",
                message: "200 OK",
                maintenanceUrl: null,
                allowedActions: ["PLAY", "DOWNLOAD"],
                banned: false,
            },
        ]);
    })
}