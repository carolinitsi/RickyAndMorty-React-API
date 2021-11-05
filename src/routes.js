import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Inicio from './pages/Inicio/inicio';
import Header from './components/Header/header';
import Episodios from './pages/Episodios/episodios';
import Personagem from './pages/Personagens/personagens';
import Genero from './pages/Genero/genero';

function Routes() { 
    
    return (    
        <BrowserRouter> 
            <Header/>        
            <Switch>            
                <Route path='/' component={Inicio} exact /> 
                <Route path='/episodios' component={Episodios} personagem={Personagem} exact />   
                <Route path='/personagens' component={Personagem} exact />   
            </Switch>      
        </BrowserRouter>      
          
)}

export default Routes;
