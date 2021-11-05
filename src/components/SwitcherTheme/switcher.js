import React from "react";
import ThemeOn from  "../../assets/imagens/Moon.svg";
import ThemeOff from "../../assets/imagens/MoonDark.svg";

const claro = <img src={ThemeOn}   alt="Tema Claro" />;
const escuro = <img src={ThemeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? claro : escuro);