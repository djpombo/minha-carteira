import React, { useState } from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, MenuItemButton, ToggleMenu, ThemeToggleFooter } from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp, MdClose, MdMenu }from 'react-icons/md';

import Toggle from '../Toggle';

import { useAuth } from '../../Hooks/Auth';
import { useTheme } from '../../Hooks/theme';


const Aside: React.FC = () => {

    const { signOut } = useAuth();
    const { toogleTheme, theme } = useTheme();

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [darkTheme, setDarkTheme]= useState(() => theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toogleTheme();
    }

    return (
        <Container menuIsOpen={menuIsOpen}>
            <Header>
                <ToggleMenu>
                    {
                        menuIsOpen ? <MdClose onClick={handleToggleMenu}/> : <MdMenu onClick={handleToggleMenu}/>
                    }
                </ToggleMenu>
                <LogoImg src={logoImg} alt="logomarca minha carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward />Saidas
                </MenuItemLink>

                <MenuItemButton onClick={() => signOut()}>
                    <MdExitToApp
                        
                    />Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={menuIsOpen}>
                <Toggle 
                    labelLeft='light'
                    labelRight='dark'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}
export default Aside;