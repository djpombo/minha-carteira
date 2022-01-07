import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, MenuItemButton } from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp }from 'react-icons/md';

import { useAuth } from '../../Hooks/Auth';

const Aside: React.FC = () => {

    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
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
        </Container>
    );
}
export default Aside;