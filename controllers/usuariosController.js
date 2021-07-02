const Usuario = require('../models/usuario')
const con = require('../infraestrutura/connection')

module.exports = app=> {
    app.get('/cadastro', function getTarefas() {
      return(req, res)=>{
        con.query(`SELECT * FROM usuarios`, usuario, (error, results)=>{
          if(error){
            res.status(400).json(error);
          } else {
            res.status(201).json(results);
          }
        })
      }
    // (req, res)=>{

    //   res.send('Servidor rodando, tuto OK')
  })

    app.post('/cadastro', (req, res)=> {
      const usuario = req.body

      Usuario.adiciona(usuario, res)
    })
}