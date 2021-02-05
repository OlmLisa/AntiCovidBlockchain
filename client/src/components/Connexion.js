import React, {useState, useEffect, Component} from "react";

// export default function Details() {

class Connexion extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            _login: null,
            _mdp: null,
        }
    }

    // Enregistre les valeurs du formulaire dans le state
    handleKeyUp = (event, field) => {
        const input = event.currentTarget;
        this.setState({
            [field]: input.value
        });
    };

    render() {
        console.log(this.props.callContract);
        return (
            <div className={'container'}>
                <h1>Se connecter : </h1>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_login")} type="text" className="form-control"
                               placeholder="_login" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_mdp")} type="text" className="form-control"
                               placeholder="_mdp" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.newConnexion(event);
                        }} type="button" className="btn btn-success">Connexion</button>
                    </div>
                </div>
            </div>

        );
    }

    newConnexion = async e => {

        // à sauver dans la bdd ? et lier à un compte ETH

    }
}
export default Connexion;
