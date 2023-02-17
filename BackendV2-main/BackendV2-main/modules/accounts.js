const mongoose = require("mongoose");
const crypto = require('crypto');

const AccountSchema = new mongoose.Schema({
    id: {
        type: String,
        default: crypto.randomBytes(16).toString("hex")
    },
    discord: String,
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    incoming: {
        type: Array,
        default: []
    },
    outgoing: {
        type: Array,
        default: []
    },
    accepted: {
        type: Array,
        default: []
    },
    character: {
        type: String,
        default: ""
    },
    backpack: {
        type: String,
        default: ""
    },
    pickaxe: {
        type: String,
        default: ""
    },
    glider: {
        type: String,
        default: ""
    },
    skydivecontrail: {
        type: String,
        default: ""
    },
    dance: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    itemwrap: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    musicpack: {
        type: String,
        default: ""
    },
    loadingscreen: {
        type: String,
        default: ""
    },
    profilerevision: {
        type: Number,
        default: 1
    },
    vbucks: {
        type: Number,
        default: 1400
    },
    level: {
        type: Number,
        default: 100
    },
    mtxplatform: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('accounts', AccountSchema);