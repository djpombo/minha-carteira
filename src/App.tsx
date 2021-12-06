import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Layout from './Components/Layout';
import dark from './Styles/Themes/dark';
import light from './Styles/Themes/light';

const App: React.FC = () =>{
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
            
        </ThemeProvider>
        
    );
}
export default App;