/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { GlobalStyle } from './styled/globalstyle';
import Routes from './routes';
import { temaClaro, temaEscuro } from '../src/styled/temas';
import { ThemeProvider } from 'styled-components';
import {switcherTema} from './components/SwitcherTheme/switcher';
import './App.css';
import buttonTheme from '../src/styled/buttontheme';


function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    console.log(tema);
    setTema((tema) => !tema);
  };

  return (
    <> 
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
          <buttonTheme onClick={toggleTema}>
            <switcherTema tema={tema}/>
            <span>Dark mode</span>
          </buttonTheme>
          <Routes/>
      </ThemeProvider>
    </>
  );
}
export default App;
