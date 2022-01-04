import styled from "styled-components";

interface ILegendProps{
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 14rem;

    margin: .8rem 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: .6rem;

    padding: .5rem .8rem;

    display: flex;
    
`;

export const SideLeft = styled.aside`
    padding: .6rem 1rem;

    > h2 {
        margin-bottom: 1.8rem;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 8.8rem;
    padding-right: .5rem;
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
        
        font-size: 1.2rem;
        line-height: 2.8rem;
        text-align: center;

    }

    > span {
        margin-left: .3rem;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    
`;