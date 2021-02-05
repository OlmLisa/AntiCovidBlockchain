import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Patient from "./components/Patient/Details.js";
import Treatment from "./components/Treatment/Details.js";
import TraitementList from "./components/Treatment/List.js";
import PatientList from "./components/Patient/List.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import Web3 from "web3";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {contract: null};
    componentDidMount = async () => {
        try {
            const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
            web3.eth.defaultAccount = web3.eth.accounts[0];

            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            const balance = await web3.eth.getBalance(accounts[0]);
            console.log("balance", web3.utils.fromWei(balance, "ether"));

            const HealthContract = new web3.eth.Contract([
                {
                            "inputs": [{
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        }, {
                            "constant": true,
                            "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
                            "name": "getPatientDetailedData",
                            "outputs": [{
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }, {
                            "constant": true,
                            "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
                            "name": "getPatientPrimaryData",
                            "outputs": [{
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }, {"internalType": "bool", "name": "", "type": "bool"}, {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }, {"internalType": "string", "name": "", "type": "string"}, {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }, {"internalType": "string", "name": "", "type": "string"}, {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }, {
                            "constant": true,
                            "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
                            "name": "getTreatment",
                            "outputs": [{
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }, {"internalType": "string", "name": "", "type": "string"}, {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }, {
                            "constant": false,
                            "inputs": [{
                                "internalType": "uint256",
                                "name": "_id",
                                "type": "uint256"
                            }, {
                                "internalType": "uint256",
                                "name": "treatmentId",
                                "type": "uint256"
                            }, {
                                "internalType": "uint256",
                                "name": "birthYear",
                                "type": "uint256"
                            }, {"internalType": "bool", "name": "sexe", "type": "bool"}, {
                                "internalType": "string",
                                "name": "postCode",
                                "type": "string"
                            }, {
                                "internalType": "string",
                                "name": "country",
                                "type": "string"
                            }, {
                                "internalType": "string",
                                "name": "medicalHistory",
                                "type": "string"
                            }, {"internalType": "string", "name": "addressContract", "type": "string"}],
                            "name": "newPatient",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "function"
                        }, {
                            "constant": false,
                            "inputs": [{
                                "internalType": "uint256",
                                "name": "_id",
                                "type": "uint256"
                            }, {
                                "internalType": "string",
                                "name": "_activeAgent",
                                "type": "string"
                            }, {
                                "internalType": "string",
                                "name": "_descrition",
                                "type": "string"
                            }, {"internalType": "string", "name": "_steps", "type": "string"}],
                            "name": "newTreatment",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "function"
                        }, {
                            "constant": true,
                            "inputs": [],
                            "name": "owner",
                            "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }, {
                            "constant": false,
                            "inputs": [{
                                "internalType": "uint256",
                                "name": "_id",
                                "type": "uint256"
                            }, {"internalType": "uint256", "name": "deathDate", "type": "uint256"}],
                            "name": "patientDeath",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "function"
                        }, {
                            "constant": false,
                            "inputs": [{
                                "internalType": "uint256",
                                "name": "_id",
                                "type": "uint256"
                            }, {"internalType": "uint256", "name": "remissionDate", "type": "uint256"}],
                            "name": "patientRemision",
                            "outputs": [],
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "function"
                        }, {
                            "constant": false,
                            "inputs": [{"internalType": "address", "name": "_newOwner", "type": "address"}],
                            "name": "transferOwnership",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        }], "0xDb36946ab97a47C82f63edcEB3AeA8a1E1eD1FA7");
            this.setState({contract: HealthContract}, this.runExample);
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

    runExample = async () => {
        console.log('test');
    };

    render() {
//TEST_TRUFFLE_CONFIG SUR GANACHE
        console.log("CONTRAT" + this.state);

        return (
            <div className="App">
                <Router>
                    <Navbar callContract={this.state}/>
                    <div className="marginNav">
                        <Switch>
                            <Route exact path='/patientList' render={props =>
                                (<PatientList callContract={this.state}/>)
                            }/>
                            <Route exact path='/' render={props =>
                                (<Home/>)
                            }/>
                            <Route exact path='/traitementList' render={props =>
                                (<TraitementList callContract={this.state}/>)
                            }/>
                            <Route exact path='/addPatient' render={props =>
                                (<Patient callContract={this.state}/>)
                            }
                            />.<Route exact path='/addTraitement' render={props =>
                            (<Treatment callContract={this.state}/>)
                        }/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
