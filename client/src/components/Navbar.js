import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark setNavbar bg-dark">
                <a className="navbar-brand" href="#">COVID19</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/">Home</Link>
                        </li>
                        <li className="navbar-nav mr-auto">
                            <Link className={"nav-link"} to="/addPatient">Ajout Patient</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/addTraitement">Ajout Traitement</Link>
                        </li>
                        <li className="navbar-nav mr-auto">
                            <Link className={"nav-link"} to="/patientList">Consultation Patient</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/traitementList">Consultation Traitement</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}