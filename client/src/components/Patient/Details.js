import React, {useState, useEffect, Component} from "react";

class Details extends Component {

    // Création Form Patient
    constructor(props) {
        super(props)
        this.state = {
            dataOwner: null,
            treatmentId: 0,
            birthYear: 0,
            sexe: null,
            postCode: null,
            country: null,
            medicalHistory: null,
            addressContract: null
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
                <h1>Details/Ajout du patients : </h1>
                <h2>Création d'un Patient</h2>
                <br/>
                <div className="text-justify">
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "id")} type="text" className="form-control"
                               placeholder="id" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "treatmentId")} type="number" className="form-control"
                               placeholder="treatmentId" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "birthYear")} type="number" className="form-control"
                               placeholder="birthYear" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "sexe")} type="number" className="form-control"
                               placeholder="sexe" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "postCode")} type="text" className="form-control"
                               placeholder="postCode" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "country")} type="text" className="form-control"
                               placeholder="country" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "medicalHistory")} type="text" className="form-control"
                               placeholder="medicalHistory" />
                    </div>
                    <div className="form-group">
                        <input onKeyUp={(event) => this.handleKeyUp(event, "addressContract")} type="text" className="form-control"
                               placeholder="addressContract" />
                    </div>
                    <div className="text-center">
                        <button onClick={(event) => {
                            this.newPatients(event);
                        }} type="button" className="btn btn-success">Créer le patient</button>
                    </div>
                </div>
            </div>

        );
    }

    newPatients = async e => {
        const gas = await this.props.callContract.contract.methods.newPatient(this.state.id, this.state.treatmentId, this.state.birthYear, this.state.sexe, this.state.postCode, this.state.country, this.state.medicalHistory, this.state.addressContract).estimateGas();
        console.log("GAS"+gas);

        this.props.callContract.contract.methods.newPatient(this.state.id, this.state.treatmentId, this.state.birthYear, this.state.sexe, this.state.postCode, this.state.country, this.state.medicalHistory, this.state.addressContract)
            .send({ from: "0xc9230cA9A886B7b9d5fF96aB565BdCd79CB66318", gas });
    }
}
export default Details;