const profile = require('../AccountSettings/profile');
const Data = require('../../modules/accounts');

module.exports = (app, fs) => {
    app.post("/fortnite/api/game/v2/profile/:accountId/client/:command", async (req, res) => {
        res.setHeader("Content-Type", "application/json");
        var profileID = req.query.profileId;
        var accountId = req.params.accountId
        var rvn = req.query.rvn;
        var command = req.params.command;

        const profileData = await profile.Response(profileID, accountId, rvn);

        switch (command) {
            case "QueryProfile":
                switch (profileID) {
                    case "athena":
                        res.json(profileData);
                        break;
                    case "profile0":
                        res.json(profileData);
                        break;
                    case "creative":
                        res.json(profileData);
                        break;
                    case "common_core":
                        res.json(profileData);
                        break;
                    case "common_public":
                        res.json(profileData);
                        break;
                    case "collection_book_schematics0":
                    case "collection_book_people0":
                    case "metadata":
                    case "collections":
                    case "theater0":
                    case "outpost0":
                    case "metadata":
                        res.json(profileData);
                        break;
                }
                break;
            case "ClientQuestLogin":
                switch (profileID) {
                    case "athena":
                        res.json(profileData);
                        break;
                    case "creative":
                        res.json(profileData);
                        break;
                    case "common_core":
                        res.json(profileData);
                        break;
                    case "common_public":
                        res.json(profileData);
                        break;
                }
                break;
            case "SetMtxPlatform":
                res.json({
                    profileRevision: rvn + 1,
                    profileId: profileID,
                    profileChangesBaseRevision: rvn + 1,
                    profileChanges: [{
                        changeType: "statModified",
                        name: "current_mtx_platform",
                        value: req.body.platform
                    }],
                    profileCommandRevision: rvn + 1,
                    serverTime: new Date(),
                    responseVersion: 1
                })
                break;
            case "EquipBattleRoyaleCustomization":
                switch (req.body.slotName) {
                    case "character":
                        break;
                }
                break;
            case "SetCosmeticLockerSlot":
                switch (req.body.category) {
                    case "character":
                        break;
                }
                break;
        }
    })
}