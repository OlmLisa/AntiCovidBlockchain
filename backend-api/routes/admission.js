const express = require('express');
const { pool } = require('../config/db');
const router_admission = express.Router();

// Obtenir toutes les admissions .
router_admission.get('/', (request,response) =>{
    pool.query('SELECT * FROM admission ORDER BY id', (error, result)=>{
        if(error){
            throw new Error('Error request');
        }
        else{
            response.status(200).json(result.rows);
        }
    });
});

module.exports = router_admission;
