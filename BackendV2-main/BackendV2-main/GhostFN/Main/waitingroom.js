module.exports = (app, fs) => {
    app.get("/waitingroom/api/waitingroom", (req, res) => {
        res.status(204).end()
    })
}