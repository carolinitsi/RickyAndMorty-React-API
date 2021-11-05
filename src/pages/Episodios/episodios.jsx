import React, {useState,useEffect} from "react";
import {listaPersonagens} from '../../api/api';
import CardEp from '../../components/CardEP/cardEp';
import { ContainerEpsodios } from './style';

function Episodios() {
  
    const [episodios, setEpisodios] = useState();
    useEffect(() => {
      listaPersonagens(`/episode`, setEpisodios);
    }, [])
    
      return(
         <ContainerEpsodios>
            {episodios && 
               episodios.results.map( (episodio) => {
                   return(
                         <>
                           {
                             episodios && 
                             <CardEp episodio={episodio}/>                              
                           }
                         </>
                   )
               })
             }
         </ContainerEpsodios>
      )
       
}
export default Episodios;