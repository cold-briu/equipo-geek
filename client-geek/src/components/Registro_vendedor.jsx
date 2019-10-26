import React from "react";
import { Link } from "react-router-dom";

class Registro_vendedor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <h3>REGISTRO</h3>
                        <form action="" className="justify-content-center">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Nombre Completo</h6>
                                        <input type="text" placeholder="Nombre Completo"/> 
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Numero de Documento</h6>
                                        <input type="number" placeholder="Numero de Documento"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Fecha de Nacimiento</h6>
                                        <input type="date" placeholder="Fecha de Nacimiento"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Genero</h6>
                                        <select name="" id="">
                                            <option value="Hombre">Hombre</option>
                                            <option value="Mujer">Mujer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Correo Electronico</h6>
                                        <input type="text" placeholder="Correo Electronico"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Numero de Celular</h6>
                                        <input type="number" placeholder="Numero de Celular"/>
                                    </div>
                                </div>
                                <Link to="/">
                                    <button type="submit" className="btn btn-lg btn-dark btn-siguiente" name="Siguiente">Registrarse</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default Registro_vendedor;