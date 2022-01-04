import styled from "styled-components";

export const Container = styled.div`
    width: 48%;
    height: 14rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: .6rem;

    margin: .8rem 0;
    padding: 1.5rem 2.2rem;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    > header img {
        width: 2rem;
        margin-left: .3rem;
    }

    > header p{
        font-size: 1.5rem;
    }
`;