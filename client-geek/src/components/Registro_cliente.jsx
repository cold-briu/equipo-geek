import React from "react";
import { Link } from "react-router-dom";

class Registro_cliente extends React.Component{
    constructor(props){
        super(props);
        
		this.state = {
			name: '',
			email: '',
			password: '',
			phone: '',
			document: '',
			birthday: '',
			city: '',
			genere: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <h3 className="mb-4">REGISTRO CLIENTE</h3>
                        <form action="" className="justify-content-center">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Nombre Completo</h6>
                                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Nombre Completo"/> 
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Numero de Documento</h6>
                                        <input type="number" value={this.state.document} name="document" onChange={this.handleChange}  placeholder="Numero de Documento"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Fecha de Nacimiento</h6>
                                        <input type="date" value={this.state.birthday} name="birthday" onChange={this.handleChange}  placeholder="Fecha de Nacimiento"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Genero</h6>
                                        <select name="" value={this.state.birthday} name="birthday" onChange={this.handleChange} id="">
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
                                    <button type="submit" className="btn btn-lg btn-success text-dark btn-verificacion" name="Siguiente">Registrar Usuario</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default Registro_cliente;