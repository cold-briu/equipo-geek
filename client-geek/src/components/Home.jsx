import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
               <div className="container-fluid">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <div className="mb-5">
                                <h3>BIENVENIDO JUAN!</h3>
                            </div>
                           <Link to="/Agregar_contrato">
                                <button type="submit" className=" btn btn-lg btn-success mb-4">AGREGAR CONTRATOS</button>
                           </Link>
                           <Link to="/">
                                <button type="submit" className="btn btn-lg btn-dark mb-4">MIS CONTRATOS</button>
                           </Link>
                           <Link to="/">
                                <button type="submit" className="btn btn-lg btn-dark">MIS USUARIOS</button>
                           </Link>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Home;