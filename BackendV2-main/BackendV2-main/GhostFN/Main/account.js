const Data = require('../../modules/accounts');
const express = require('express');
const app = express();
const fs = require('fs');

/**
 * 
 * @param {app} app 
 * @param {fs*} fs 
 */


module.exports = (app, fs) => {
    app.get("/account/api/public/account/:accountId", async (req, res) => {
        const accounts = await Data.findOne({ id: req.params.accountId }).lean();
        res.json({
            id: accounts.id,
            displayName: accounts.displayName,
            name: "SexyBloody",
            email: accounts.email,
            failedLoginAttempts: 0,
            lastLogin: new Date().toISOString(),
            numberOfDisplayNameChanges: 0,
            ageGroup: "undefined",
            headless: false,
            country: "US",
            lastName: "_User145",
            preferredLanguage: "en",
            canUpdateDisplayName: false,
            tfaEnabled: false,
            emailVerified: true,
            minorVerified: false,
            minorExpected: false,
            minorStatus: "NotAMinor",
        })
    });

    app.get("/account/api/public/account/displayName/:displayName", async (req, res) => {
        var accounts = await Data.findOne({ displayName: req.params.displayName }).lean();

        res.json({
            id: accounts.id,
            displayName: accounts.displayName,
            externalAuths: {}
        })
    })

    app.get("/account/api/public/account/:accountId/externalAuths", async (req, res) => {
        res.json({})
    })


    app.get("/account/api/public/account", async (req, res) => {
        var accounts = await Data.findOne({ id: req.query.accountId }).lean();

        res.json([
            {
                "id": accounts.id,
                "displayName": accounts.displayName,
                "externalAuths": {}
            }
        ])
    })
}