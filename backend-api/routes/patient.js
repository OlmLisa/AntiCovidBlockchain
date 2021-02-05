const express = require('express');
const { pool } = require('../config/db');
const router_boat = express.Router();

// Obtenir tous les patients.
router_boat.get('/', (request,response) =>{
    pool.query('SELECT * FROM patient ORDER BY id', (error, result)=>{
        if(error){
            throw new Error('Error request');
        }
        else{
            response.status(200).json(result.rows);
        }
    });
});

module.exports = router_boat;
