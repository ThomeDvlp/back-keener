const moment = require('moment');

const connection = require('../infraestrutura/connection')

class Produto{
  adiciona(produto){
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const produtoCriado = {...produto, dataCriacao};
    const sql = 'INSERT INTO produtos SET ?';

    connection.query(sql, produtoCriado, (error, results)=>{
      if(error){
        res.status(400).json(error);
      } else {
        res.status(201).json(results);
      }
    })
  }
}

module.exports = new Produto