const express = require('express');
const { pool } = require('../config/db');
const router_traitement = express.Router();

// Obtenir tous les traitements.
router_traitement.get('/', (request,response) =>{
    pool.query('SELECT * FROM traitement ORDER BY id', (error, result)=>{
        if(error){
            throw new Error('Error request');
        }
        else{
            response.status(200).json(result.rows);
        }
    });
});

module.exports = router_traitement;
