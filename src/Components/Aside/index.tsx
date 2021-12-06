import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp }from 'react-icons/md';

const Aside: React.FC = () => {

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="logomarca minha carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward />Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward />Saidas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp />Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}
export default Aside;