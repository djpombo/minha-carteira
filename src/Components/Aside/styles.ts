
import styled, { css } from "styled-components";


interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 1.2rem;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px){
        padding-left: 5px;
        position: fixed;
        width: 180px;

        z-index: 2;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
    
`;

export const Header = styled.header`
    height: 4.1rem;
    display: flex;
    align-items: center;
            
`;

export const LogoImg = styled.img`
    height: 2.5rem;
    width: 2.5rem;

    @media(max-width: 600px){
       display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: .5rem;

    @media(max-width: 600px){
        display: none;
        
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 0 2rem;
    
    
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    
    
    display: flex;
    align-items: center;
    
    cursor: pointer;
    transition: .6s;

    margin: .4rem 0;
    
    
    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: .4rem;
    }
`;

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.info};
    
    border: none;
    display: flex;
    align-items: center;
    
    cursor: pointer;
    transition: .6s;

    margin: .4rem 0;

    font-size: 1.05rem;
    
    
    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: .4rem;
    }
    background: none;

`;

export const ToggleMenu = styled.button`
     
        display: flex;
        width: 40px;
        height: 40px;

        border-radius: 5px;
        font-size: 1.5rem;
        background-color: ${props => props.theme.colors.warining};
        color: ${props => props.theme.colors.white};
        
        transition: .3s;

        &:hover {
            opacity: .7;
        }

        @media(max-width: 600px){
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        @media(min-width: 600px){
            display: none;
        }

`;

export const ThemeToggleFooter = styled.footer<IContainerProps>`
    position: absolute;
    bottom: 2rem;

    ${props => !props.menuIsOpen && css`
            display: none;
        `};

    @media(min-width: 700px){
        display: none;
    }
`;