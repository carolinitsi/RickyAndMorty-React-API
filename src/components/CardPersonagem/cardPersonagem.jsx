import React from 'react';
import {Link} from 'react-router-dom';
import {Card } from './style';

function CardPersonagem({personagem} ){
    return(
            <div>
                <Link to="/">
                    <Card>
                        <img src={personagem.image}/>
                        <div className="card__personagem-info">
                            <h3>{personagem.name}</h3>
                            <p>Status: {personagem.status}</p>
                            <p>Gênero: {personagem.gender}</p>
                            <p>Espécie: {personagem.species}</p>
                        </div>
                    </Card>
                </Link>
            </div>
    )

};

export default CardPersonagem;