const Data = require('../../modules/accounts');
const express = require('express');
const app = express();
const fs = require('fs');
const crypto = require('crypto');

/**
 * 
 * @param {app} app 
 * @param {fs*} fs 
 */

module.exports = (app, fs) => {
    app.post("/account/api/oauth/token", async (req, res) => {
        var accounts = await Data.findOne({ email: req.body.username }).lean();
        var displayName = "";
        var password = "";
        var accountId = "";
        var grant_type = req.body.grant_type;

        switch (grant_type) {
            case "password":
                if (!req.body.username || !req.body.password) {
                    throw new ApiException(errors.com.epicgames.common.oauth.invalid_request).with("username" || "password");
                }
                if (req.body.username.includes("@")) {
                    displayName = req.body.username.split("@")[0];
                    password = req.body.password.split("@")[0];
                } else {
                    displayName = req.body.username;
                    password = req.body.password;
                }
                accountId = accounts.id;
                displayName = accounts.displayName;
                password = accounts.password;
                break;
            case "exchange_code":
                displayName = req.body.exchange_code;
                accountId = req.body.exchange_code;
                password = req.body.exchange_code;
                break;
            case "client_credentials":
                displayName = undefined;
                accountId = undefined;
                password = undefined;
                break;
            case "authorization_code":
                console.log("authorization_code")
                break;
            case "device_auth":
                console.log("device_auth")
                break;
        }

        res.json({
            access_token: crypto.randomBytes(16).toString("hex"),
            expires_in: 28800,
            expires_at: "9999-12-31T23:59:59.999Z",
            token_type: "bearer",
            account_id: accountId,
            client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
            internal_client: true,
            client_service: "fortnite",
            displayName: displayName,
            app: "fortnite",
            in_app_id: accountId,
            device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
        })
    })
}