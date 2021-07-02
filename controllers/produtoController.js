const Produto = require('../models/produto')
const conecction = require('../infraestrutura/connection')

module.exports = app=> {
    app.get('/estoque', (req, res)=>{
    res.send('Servidor rodando, tuto OK')
  })
    app.post('/produto', (req, res)=> {
      const produto = req.body

      Produto.adiciona(produto)
      res.send('POST produto')
    })
}