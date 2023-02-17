const AthenaData = require('../../modules/accounts');

module.exports = {
    async Athena(AccountId) {
        const Data = await AthenaData.findOne({ id: AccountId }).lean();

        var ProfileData = {
            templateId: "CosmeticLocker:cosmeticlocker_athena",
            atrributes: {
                locker_slots_data: {
                    slots: {
                        MusicPack: {
                            items: Data.musicpack
                        },
                        Character: {
                            items: Data.character
                        },
                        Backpack: {
                            items: Data.backpack
                        },
                        SkyDiveContrail: {
                            items: Data.skydivecontrail
                        },
                        Dance: {
                            items: Data.dance
                        },
                        LoadingScreen: {
                            items: Data.loadingscreen
                        },
                        Pickaxe: {
                            items: Data.pickaxe
                        },
                        Glider: {
                            items: Data.Glider
                        },
                        ItemWrap: {
                            items: Data.itemwrap
                        }
                    }
                },
                use_count: 0,
                banner_icon_template: "StandardBanner1",
                banner_color_template: "DefaultColor1",
                locker_name: "Ghost",
                item_seen: false,
                favorite: false
            }
        }

        return ProfileData;
    }
}