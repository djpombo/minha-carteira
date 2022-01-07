import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 1.2rem;
    border-right: 1px solid ${props => props.theme.colors.gray};

    
`;

export const Header = styled.header`
    height: 5rem;
    display: flex;
    align-items: center;
    
    
`;

export const LogoImg = styled.img`
    height: 2.5rem;
    width: 2.5rem;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: .5rem;
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