const Data = require('../../modules/accounts');

module.exports = {
    async CommonCore(AccountId) {
        var user = await Data.findOne({ id: AccountId }).lean();
        var ProfileData = {
            "attributes": {
                "past_seasons": [],
                "season_match_boost": 999999999,
                "loadouts": [
                    "loadout1"
                ],
                "favorite_victorypose": "",
                "mfa_reward_claimed": false,
                "quest_manager": {
                    "dailyLoginInterval": "",
                    "dailyQuestRerolls": 1
                },
                "book_level": 100,
                "season_num": 0,
                "favorite_consumableemote": "",
                "banner_color": "DefaultColor1",
                "favorite_callingcard": "",
                "favorite_character": user.character,
                "favorite_spray": [],
                "book_xp": 100,
                "favorite_loadingscreen": user.loadingscreen,
                "book_purchased": true,
                "lifetime_wins": 100,
                "favorite_hat": "",
                "level": user.level,
                "favorite_battlebus": "",
                "favorite_mapmarker": "",
                "favorite_vehicledeco": "",
                "accountLevel": 100,
                "favorite_backpack": user.backpack,
                "favorite_dance": user.dance,
                "inventory_limit_bonus": 0,
                "last_applied_loadout": "",
                "favorite_skydivecontrail": user.skydivecontrail,
                "favorite_pickaxe": user.pickaxe,
                "favorite_glider": user.glider,
                "daily_rewards": {},
                "xp": 999,
                "season_friend_match_boost": 999999999,
                "active_loadout_index": 0,
                "favorite_musicpack": user.musicpack,
                "banner_icon": "StandardBanner1",
                "favorite_itemwraps": user.itemwrap
            }
        }

        return ProfileData;
    }
}