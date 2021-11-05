import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    background-color:${({ theme }) => theme.body};

    @media(min-width: 599px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin:0 auto;

        p{
            color: white;
            width: 40%;
            color:${({ theme }) => theme.text};

        }
    }
`;