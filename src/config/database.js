const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: "http://mangrovedb.clskmyko4wwn.ap-southeast-2.rds.amazonaws.com",
    user: "mangrove",
    password: "Kamu_bohong<>?0!!",
    database: "mangrove",
});

module.exports = dbPool.promise();



// const {Pool} = require('pg');

// const pool = new Pool({
//     host: "byvxxnelxj9sqhfcttki-postgresql.services.clever-cloud.com",
//     user: "uixidagp1vjiht9sjviz",
//     password: "vEqCsGS5bB21OX1qm4KJjc016eDPWk",
//     database: "byvxxnelxj9sqhfcttki",
//     port:50013
// });

// module.exports = {
//     query: (text, params) => pool.query(text, params)
// };