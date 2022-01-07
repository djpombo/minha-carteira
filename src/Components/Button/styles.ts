import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    margin: .6rem 0;
    padding: .5rem;

    font-size: .8rem;
    font-weight: 700;

    margin-top: 1.2rem;

    border-radius: .3rem;
    background-color: ${props => props.theme.colors.warining};

    color: ${props => props.theme.colors.white};

    transition: opacity .5s;

    &:hover {
        opacity: .8;
    }
`;
