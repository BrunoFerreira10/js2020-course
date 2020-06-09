function save(req, res) {
    res.send('User > Save')
}

function get(req, res) {
    res.send('User > Get')
}

module.exports = {save: save, get}