import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Routes from './routes';
import dark from './Styles/Themes/dark';
import light from './Styles/Themes/light';


import ContentHeader from './Components/ContentHeader';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
                <Routes />

        </ThemeProvider>

    );
}
export default App;