import React, {useState, useEffect, Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // Liste des traitements
          traitement: [],
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

    getTreatment = async()=> {
    const b = await this.props.callContract.contract.methods.getTreatment(this.state._id).call();
    this.setState({
      traitement: b
    })
    }

    render() {
        const arr = ['ActiveAgent', 'Description', 'Steps'];
        const titles = arr.map(str => {
            return(<th>
                {str}
            </th>)
        })
        const traitements = Object.entries(this.state.traitement).map(([key,value])=>{
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
                    <p className="lead">Afficher les données du traitement :</p>
                </div>
                <div className={'container'}>
                    <h1>Details/Ajout d'un traitement : </h1>
                    <br/>
                    <div className="text-justify">
                        <div className="form-group">
                            <input onKeyUp={(event) => this.handleKeyUp(event, "_id")} type="text" className="form-control"
                                   placeholder="_id" />
                        </div>
                        <div className="text-center">
                            <button onClick={(event) => {
                                this.getTreatment(event);
                            }}type={"button"}>Remplissez l'id</button>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <tr>
                            {titles}
                        </tr>
                        <tr>
                            {traitements}
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default  List;
