import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Routes from './routes';

import { useTheme } from './Hooks/theme';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (

        <ThemeProvider theme={theme}>
            <GlobalStyles />
                <Routes />
        </ThemeProvider>
        
    );
}
export default App;