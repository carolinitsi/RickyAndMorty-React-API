import styled from 'styled-components';

export const Card = styled.div` 
    background-color: #252323eb ;
    border-radius: 10%;
    display:flex;
    flex-direction: column;
    width: 80%;
    padding: 2.5%;
    margin-bottom: 5%;
    margin: 5% auto;

    img{
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        opacity: 50%;

        :hover{
            opacity: 100%;
        }

    }

    .card__personagem-info{
        padding: 2%;
        h3{
            color:#149fad;
            font-family: 'Zen Kurenaido', sans-serif;
        }
        p{
            color: white;
            font-size: 14px;
        }
    }

    @media(min-width: 599px){
        width: 100%;

    }
  
`;

