import { Welcome } from './../MainHeader/styles';
import styled, {keyframes} from "styled-components";

interface ILegendProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateY(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    min-height: 12rem;
    
    margin: .6rem 0;
    border-radius: .7rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    display: flex;

    @media(max-width: 770px){
        display: flex;
        flex-direction: column;

        width: 100%;
        height: auto;
    }

    animation: ${animate} .5s;

`;

export const SideLeft = styled.aside`
    padding: 2rem 1.2rem;
    flex: 1;

    > h2 {
        padding-left: 1.2rem;
        margin-bottom: .5rem;
    }
`;


export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 8.8rem;
    padding-right: .5rem;
    padding-left: 1.2rem;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: .8rem;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        
    }

    @media(max-width: 770px){
        display: flex;
        
        
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    
    margin-bottom: .5rem;
    
    > div {
        background-color: ${props => props.color};
        border-radius: .3rem;
        width: 2.8rem;
        height: 2.8rem;
        
        font-size: .9rem;
        line-height: 2.8rem;
        text-align: center;

    }

    > span {
        margin-left: .3rem;
    }

    @media(max-width: 770px){
        > span {
            margin-right: .5rem;
        }
    }
`;

export const SideRight = styled.main`
    flex: 1;
    
    min-height: 8rem;
    margin-bottom: .2rem;

    display: flex;
    justify-content: center;

    padding-top: 2rem;
    
`;


