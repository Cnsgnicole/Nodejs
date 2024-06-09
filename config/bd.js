const mysql = require('mysql');
const { promisify } = require(`util`);

const db = mysql.createPool({   
  host: "localhost",
  user: "root",
  password: "",
  database: "riab",
  connectionLimit: 10, // Limita el número de conexiones simultáneas
})

const promiseQuery = promisify(db.query).bind(db)

db.getConnection((err, conn) => {
  if (err) throw err
   // Creamos las tablas si es que no existen
  connection.query(
    `CREATE TABLE IF NOT EXISTS listadeusuarios (
      id INT NOT NULL AUTO_INCREMENT,
      nombre VARCHAR(100) NOT NULL,
      precio INT NOT NULL,
      stock INT NOT NULL,
      PRIMARY KEY (id)
    )`
  )
})

module.exports = promiseQuery