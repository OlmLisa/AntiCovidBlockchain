// Objectif : Initaliser une connexion à la bdd postgres, retourner une erreur,
// Modules export est un include
// Module.export={test} on pourra l'appeler en require dans l'index.js avec const test = require("test") et ensuite console.log("test") on a la valuer.

const { Pool } = require('pg');
const pool = new Pool ({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    database: '',
    password: ''
});

pool.connect(error => {
    if(error){
        console.error('Database : Error -', error.stack); // stack get l'error précise backend error  https://node-postgres.com/features/pooling
    }
    else{
        console.log('Database : OK');
    }
});

module.exports = { pool }; // on se connect au pool