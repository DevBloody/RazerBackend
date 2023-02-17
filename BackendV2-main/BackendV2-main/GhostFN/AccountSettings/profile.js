const Data = require('../../modules/accounts');
const athena = require('./athena');
const profile = require('../profile/athena.json');
const common_core = require('./common_core');

module.exports = {
    async Response(profileID, accountId, rvn) {
        var ResponseAccount = await Data.findOne({ id: accountId }).lean();

        var ProfileResponse = {
            profileRevision: ResponseAccount.profileRevision,
            profileId: profileID,
            profileChanges: [{
                changeType: "fullProfileUpdate",
                profile: {
                    _id: "",
                    created: new Date(),
                    updated: new Date(),
                    rvn: 1,
                    wipeNumber: 2,
                    accountId: accountId,
                    profileId: profileID,
                    version: "FortniteProfile",
                    items: {
                        loadout1: {},
                    },
                    stats: {},
                    commandRevision: 0
                }
            }],
            profileCommandRevision: 0,
            serverTime: new Date().toISOString(),
            responseVersion: 1
        }


        if (profileID == "athena" || profileID == "profile0") {
            ProfileResponse['profileChanges'][0]['profile']['items']['loadout1'] = await athena.Athena(accountId);
            ProfileResponse['profileChanges'][0]['profile']['items'] = await profile;
        }

        if (profileID == "common_public" || profileID == "common_core") {
            ProfileResponse['profileChanges'][0]['profile']['stats'] = await common_core.CommonCore(accountId);
        }

        return ProfileResponse;
    }
}