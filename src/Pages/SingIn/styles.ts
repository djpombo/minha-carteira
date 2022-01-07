import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 1.7rem;

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-left: .5rem;
        font-size: 1.2rem;
    }

    > img {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 17rem;
    height: 17rem;
    
    padding: .8rem 2rem;
    border-radius: .6rem;

    background-color: ${props => props.theme.colors.tertiary};

`;

export const FormTitle = styled.h1`

    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    margin-top: .5rem;

    color: ${props => props.theme.colors.white};

    &::after {
            content: '';
            display: block;
            width: 2.6rem;
            border-bottom: .4rem solid ${props => props.theme.colors.warining};
        }
`;