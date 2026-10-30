const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gym_membership",
});
module.exports = conn;