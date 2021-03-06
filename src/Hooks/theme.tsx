import React, { createContext, useState, useContext } from 'react';

import dark from '../Styles/Themes/dark';
import light from '../Styles/Themes/light';

interface IThemeContext {
    toogleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        gray: string;
        success: string;
        warining: string;
        info: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC =({ children }) => {

    const [theme, setTheme] = useState<ITheme>(() =>{
        const themeSaved = localStorage.getItem("@minha-carteira: tema");

        if(themeSaved){
            return JSON.parse(themeSaved);
        } else {
            return dark
        }
    });

    const toogleTheme = () => {
        if(theme.title === 'dark') {
            setTheme(light);
            localStorage.setItem("@minha-carteira: tema", JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem("@minha-carteira: tema", JSON.stringify(dark));
        }
    };
    return(
        <ThemeContext.Provider value={{ toogleTheme, theme }}>
            { children }
        </ThemeContext.Provider>
    )

}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProvider, useTheme };

