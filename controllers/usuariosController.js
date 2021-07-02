const Usuario = require('../models/usuario')
const con = require('../infraestrutura/connection')

module.exports = app=> {
    app.get('/cadastro', (req, res)=>{

      res.send('Servidor rodando, tuto OK')
  })

    app.post('/cadastro', (req, res)=> {
      const usuario = req.body

      Usuario.adiciona(usuario, res)
    })
}