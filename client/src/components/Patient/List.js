import React, {useState, useEffect, Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Liste des patients
            patient: [],
            isActive: false,
            _id : null
        }
    }

    // Enregistre les valeurs du formulaire dans le state
    handleKeyUp = (event, field) => {
        const input = event.currentTarget;
        this.setState({
            [field]: input.value
        });
    };

    getPatient = async()=> {
        const t = await this.props.callContract.contract.methods.getPatientPrimaryData(this.state._id).call();
        this.setState({
            patient : t
        })

    }

    render() {
        const arr = ['BirthYear', 'Sexe', 'PostCode', 'Country' ,'RefPhysician', 'MedicalHistory', 'AddressContract'];
        const titles = arr.map(str => {
            return(<th>
             {str}
            </th>)
        })
        const patients = Object.entries(this.state.patient).map(([key,value])=>{
            return (
                <td>
                    {value}
                </td>
            );
        })
        return (
            <div>
                <div className={"container text-center"}>
                    <h2 className={"py-3"}>Interface Patient</h2>
                    <br/>
                    <p className="lead">Afficher les données du patient :</p>
                </div>
                <div className={'container'}>
                    <h1>Details/Ajout d'un patient : </h1>
                    <br/>
                    <div className="text-justify">
                        <div className="form-group">
                            <input onKeyUp={(event) => this.handleKeyUp(event, "_id")} type="text" className="form-control"
                                   placeholder="_id" />
                        </div>
                        <div className="text-center">
                            <button onClick={(event) => {
                                this.getPatient(event);
                            }}type={"button"}>Cliquez l'id</button>
                        </div>
                    </div>
                </div>
                <div>
                    <table  class="table">
                        <tr>
                        {titles}
                        </tr>
                        <tr>
                            {patients}
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default  List;
