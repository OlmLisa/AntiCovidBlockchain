const express = require ('express'); // appel express
//const { pool } = require('./config/db'); test de la connexion
const bodyParser = require('body-parser');
const router_patient = require('./routes/patient');
const router_traitement = require('./routes/traitement');
const router_admission = require('./routes/admission');
var cors = require('cors');

const app = express(); // on définit avec express les requêtes http qui vont être accessible
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/patient', router_patient);
app.use('/traitement', router_traitement);
app.use('/admission', router_admission);

app.listen(6565, ()=> {
    console.log('Listening on port 6565'); // Avant il ouvre le port
}); //ouvrir un port au serveur
