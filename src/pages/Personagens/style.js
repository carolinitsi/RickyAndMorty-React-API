import styled from 'styled-components';

export const ContainerPersonagens = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    @media(min-width: 599px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin:0 auto;
    }
`;

