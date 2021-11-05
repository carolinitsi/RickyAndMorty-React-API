import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card } from './style';
import {busca, listaPersonagens,mostraPersonagem} from '../../api/api';


function CardEp({episodio} ){

    const ListaPersonagens = episodio.characters;
    return(
            <div>
                    <Card>
                        <div className=".card__episodio-info">
                            <h3>{episodio.name}</h3>
                            <p>Episódio: {episodio.episode}</p>
                            
                            {/* <p>Personagens: {episodio.characters}</p> */}
                            {/* <div>
                            {
                                ListaPersonagens && 
                                ListaPersonagens.map( (personagem) => {
                                    return(
                                        <>
                                        {
                                            ListaPersonagens && 
                                            <img src={personagem}/>
                                        }
                                        </>
                                    )
                                })
                                }
                            </div> */}

                        </div>
                    </Card>
            </div>
    )

};

export default CardEp;