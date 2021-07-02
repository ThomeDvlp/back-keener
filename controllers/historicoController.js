const Historico = require('../models/historico')

module.exports = app=> {
    app.get('/historico', (req, res)=>{
    res.send('Servidor rodando, tuto OK')
  })
    app.post('/historico', (req, res)=> {
      const historico = req.body

      Historico.adiciona(historico)
      res.send('POST historico')
    })
} 

