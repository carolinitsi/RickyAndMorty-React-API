import styled from 'styled-components';

export const buttonTheme = styled.button` 
        background-color: green;

        :hover{
            cursor: pointer;
            background-color: #dddd;
        }

        span{
            color:${({ theme }) => theme.text};
        }    
`;

