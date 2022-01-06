import React, { useMemo, useState } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';

import { useTheme } from '../../Hooks/theme';

const MainHeader: React.FC = () => {

    const {toogleTheme, theme} = useTheme();
    const [darkTheme, setDarkTheme]= useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () =>{
        setDarkTheme(!darkTheme);
        toogleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    

    return (
        <Container>
            <Toggle 
                labelLeft='light'
                labelRight='dark'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
            <Welcome>Olá, {emoji}</Welcome><br />
                <UserName>Thuiskon Kerber</UserName>
            </Profile>
        </Container>
    );
}
export default MainHeader;