const moment = require('moment');

const connection = require('../infraestrutura/connection')

class Historico{
  adiciona(historico){
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const historicoCriado = {...historico, dataCriacao};
    const sql = 'INSERT INTO historicos SET ?';

    connection.query(sql, historicoCriado, (error, results)=>{
      if(error){
        console.log(error);
      } else {
        console.log(results);
      }
    })
  }
}

module.exports = new Historico