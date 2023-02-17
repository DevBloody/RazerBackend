const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

//mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://GhostFN:GhostFN@cluster0.uowxymq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, console.log("MongDB has connected to the database!"));

const PORT = process.env.PORT || 4495;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res, next) => {
    console.log(`[${req.method}]: [${req.url}]`);
    next();
});

fs.readdir('./GhostFN/Main', (err, files) => {
    files.forEach(file => {
        require("./GhostFN/Main/" + file)(app, fs);
    })
})

app.listen(PORT, () => {
    console.log('GhostFN Backend is Running On Port', PORT)
})