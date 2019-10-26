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
                                <h3>AGREGAR CLIENTE</h3>
                            </div>
                            <form action="">
                                <div className="form-group">
                                    <div className="col-12">
                                        <h6 className="btn btn-success btn-lg mr-2">SELECCIONAR CLIENTE</h6>
                                        <select name="" id="">
                                            <option value="" placeholder="Cliente Registrados">Cliente Registrado</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                           <Link to="/Registro_cliente">
                                <button type="submit" className="btn btn-lg btn-success">AGREGAR UN NUEVO CLIENTE</button>
                           </Link>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Home;