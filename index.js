const app = require('express')();

app.listen(3000, () => console.log('Estou funcionando'))

app.get('/api', (req, res) => {
    res.send({
        javascript: 20,
        node: 10
    })
})