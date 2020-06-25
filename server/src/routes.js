module.exports = (app) => {
    app.post('/status', (req, res) => {
        res.send({
            message: `Tangina mo ${req.body.email}`
        })
    })
}
