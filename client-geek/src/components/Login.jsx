import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);

        }
    

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <h3>LOGIN</h3>
                            <form action="">
                                <div className="form-group">
                                    <h6>Correo Electronico</h6>
                                    <input type="email" className="form-control" name="Text" placeholder="Correo Electronico"/>
                                </div>
                                <div className="form-group">
                                    <h6>Contraseña</h6>
                                    <input type="password" className="form-control" name="password" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group row d-flex justify-content-center">
                                    <Link to='/Registro_vendedor'> 
                                        <button type="button" className="form-control btn btn-lg btn-regresar btn-dark" name="Registro">Registro</button>
                                    </Link>
                                    <Link to="/Siguiente">
                                        <button type="submit" className="form-control btn btn-lg btn-success ml-2" name="Siguiente">Siguiente</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;