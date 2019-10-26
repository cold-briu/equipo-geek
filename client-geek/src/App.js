import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Componentes React*/
import Registro_vendedor from './components/Registro_vendedor'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
         <Switch>
         <Route exact path="/Registro_vendedor" component={Registro_vendedor}/>
         <Route exact path="/" component={Login}/>

         </Switch>
     </BrowserRouter>
  )
}


export default App;
