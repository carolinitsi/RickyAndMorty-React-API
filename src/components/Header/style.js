import styled from 'styled-components';
import logo from '../../assets/imagens/background.jpg';

export const Navigation = styled.nav`
    width: 100%;
    height: auto;
    img{
        width: 100%;
        height: 400px;
        -webkit-mask-image: linear-gradient(to top, transparent 25%, ${({ theme }) => theme.body} 100%);
	    background-image: url({logo});

        @media(min-width: 599px){
	        height: 700px;
	        
        }
    }

    li{
        font-size: 30px;
    }
    .navigation__menu__link{
        color:#149fad;

        :hover{
            color:#358e19;
        }
    }
`;
export const Menu = styled.ul`
    display: flex;
    flex-direction: column;

    @media(min-width: 599px){
        flex-direction: row;
        justify-content: space-around;
        width: 100%; 
        position: absolute;  
        top: 500px;

    }
`;
