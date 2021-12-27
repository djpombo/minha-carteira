import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    padding: 1.5rem;

    height: calc(100vh - 70px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: .8rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: .8rem;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        
    }
`;