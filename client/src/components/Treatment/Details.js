import React, {useState, useEffect, Component} from "react";

// export default function Details() {

class Details extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            _id:0,
            _activeAgent: null,
            _description: null,
            _steps: null
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
                <h1>Details/Ajout d'un traitement : </h1>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_id")} type="text" className="form-control"
                               placeholder="_id" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_activeAgent")} type="text" className="form-control"
                               placeholder="_activeAgent" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_description")} type="text" className="form-control"
                               placeholder="_description" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "_steps")} type="text" className="form-control"
                               placeholder="_steps" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.newTreatment(event);
                        }} type="button" className="btn btn-success">Créer le traitement</button>
                    </div>
                </div>
            </div>

        );
    }

    newTreatment = async e => {
        const gas = await this.props.callContract.contract.methods.newTreatment(this.state._id, this.state._activeAgent, this.state._description, this.state._steps).estimateGas();
        console.log(this.state._id);
        console.log(this.state._activeAgent);
        console.log(this.state._description);
        console.log(this.state._steps);
        console.log("GAS"+gas);

        this.props.callContract.contract.methods.newTreatment(this.state._id, this.state._activeAgent, this.state._description, this.state._steps)
            .send({ from: "0xc9230cA9A886B7b9d5fF96aB565BdCd79CB66318", gas });
    }
}
export default Details;
