import React from 'react';
import {Link} from 'react-router-dom';
import {Navigation,Menu} from './style';
import background from '../../assets/imagens/background.jpg';


function Header( ){
    return(
            <Navigation>
                <img src={background}/>
                <Menu>
                    <li><Link className="navigation__menu__link" to="/">Inicio</Link></li>
                    <li><Link className="navigation__menu__link" to="/episodios">Episódios</Link></li>
                    <li><Link className="navigation__menu__link" to="/personagens">Personagens</Link></li>
                </Menu>
            </Navigation>
    )
};
export default Header;