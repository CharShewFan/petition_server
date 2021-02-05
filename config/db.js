const mysql = require('mysql2/promise')
require('dotenv').config();

let state = {pool:null}

exports.connect = async function(){
    state.pool = await mysql.createPool({
        host:process.env.DB_PORT,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_DATABASE,
    });
    await state.pool.getConnection(); // check connection
    console.log('successfully connected to database')
};

exports.get_pool = function(){
    return state.pool
}
