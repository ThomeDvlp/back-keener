const conecction = require('../infraestrutura/connection')

class Usuario {
  adiciona(usuario, res){
    const sql = 'INSERT INTO usuarios SET ?'

    conecction.query(sql, usuario, (error, results)=>{
      if(error){
        res.status(400).json(error);
      } else {
        res.status(201).json(results);
      }
    })
  }
}

module.exports = new Usuario