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
  conn.query(
    `CREATE TABLE IF NOT EXISTS historial (
      id INT NOT NULL AUTO_INCREMENT,
      castrado VARCHAR(100) NOT NULL,
      operado VARCHAR(100) NOT NULL,
      discapacidad VARCHAR(100) NOT NULL,
      rabia VARCHAR(100) NOT NULL,
      enfermedades VARCHAR(100) NOT NULL,
      desparasitados VARCHAR(100) NOT NULL,
      PRIMARY KEY (id)
    )`
  )
})

module.exports = promiseQuery
