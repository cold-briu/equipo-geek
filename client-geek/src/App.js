import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Componentes React*/
import Registro_vendedor from './components/Registro_vendedor'
import Login from './components/Login'
import Registro_cliente from './components/Registro_cliente'
import Home from './components/Home'
import Agregar_cliente from './components/Agregar_cliente'

function App() {
  return (
    <BrowserRouter>
         <Switch>
         <Route exact path="/Registro_vendedor" component={Registro_vendedor}/>
         <Route exact path="/" component={Login}/>
         <Route exact path="/Registro_cliente" component={Registro_cliente}/>
         <Route exact path="/Home" component={Home}/>
         <Route exact path="/Agregar_Cliente" component={Agregar_cliente}/>
         </Switch>
     </BrowserRouter>
  )
}


export default App;
