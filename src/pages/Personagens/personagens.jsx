/* eslint-disable no-lone-blocks */
import React, {useState,useEffect} from "react";
import {listaPersonagens} from '../../api/api';
import CardPersonagem from '../../components/CardPersonagem/cardPersonagem';
import { ContainerPersonagens } from './style';

function Personagem() {
  
    const [personagens, setPersonagens] = useState();
    useEffect(() => {
      listaPersonagens(`/character`, setPersonagens);
    }, [])
    
    console.log("personagens");
    console.log(personagens);
      return(
        <ContainerPersonagens>
           {personagens && 
              personagens.results.map( (personagem) => {
                  return(
                        <>
                          {
                            personagens && 
                            <CardPersonagem personagem={personagem}/>                              
                          }
                        </>
                  )
              })
            }
        </ContainerPersonagens>
      )
       
}
export default Personagem;