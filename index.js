const customExpress = require ('./config/customExpress');
const connection = require('./infraestrutura/connection')
const Tables = require ('./infraestrutura/tables')



connection.connect(error=>{
  if (error){
    console.log(error);
  } else {
    console.log('Conectado com Sucesso');

    Tables.init(connection);
    const app = customExpress();

    app.listen(3001, ()=> console.log('Servidor rodando na porta 3001'));
  }
});


