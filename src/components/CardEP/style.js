import styled from 'styled-components';

export const Card = styled.div` 
    background-color: #252323eb;
    border-radius: 10%;
    display:flex;
    flex-direction: column;
    height: 100px;
    width: 80%;
    padding: 2.5%;
    margin-bottom: 5%;
    margin: 5% auto;

    @media(min-width: 599px){
        width: 200px;
    }

    img{
        width: 25px;

        :hover{
            opacity: 100%;
        }

    }

    .card__episodio-info{
        padding: 2%;
        h3{
            color:#149fad;
            font-family: 'Zen Kurenaido', sans-serif;
        }
        p{
            color: white;
            font-size: 14px;
            width: 200px;
        }
    }
  
`;

