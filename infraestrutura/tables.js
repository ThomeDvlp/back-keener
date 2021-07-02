class Tables {
  init(connection) {
    this.connection = connection;

    this.criarUsuarios();
    this.criarProdutos();
    this.criarHistorico();
  }

  criarUsuarios() {
    const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(50) NOT NULL, senha varchar (50) NOT NULL, PRIMARY KEY (id))';

    this.connection.query(sql, error=>{
      if(error) {
        console.log(error)
      } else {
        console.log('Tabela Usuarios criada com sucesso')
      }
    })
  }

  criarProdutos () {
    const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, quantidade int NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY (id) )';

    this.connection.query(sql, error=>{
      if(error) {
        console.log(error)
      } else {
        console.log('Tabela Produtos criada com sucesso')
      }
    })
  }

criarHistorico () {
  const sql = 'CREATE TABLE IF NOT EXISTS historico_estoque (id int NOT NULL AUTO_INCREMENT, item varchar(50) NOT NULL, quantidade int NOT NULL, acao varchar(50) NOT NULL, responsavel varchar(50), dataCriacao datetime NOT NULL,  PRIMARY KEY (id) )';

  this.connection.query(sql, error=>{
    if(error) {
      console.log(error)
    } else {
      console.log('Tabela Movimentação de Produtos criada com sucesso')
    }
  })
}

}


module.exports = new Tables