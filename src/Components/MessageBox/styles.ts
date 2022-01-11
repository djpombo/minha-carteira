import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

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

    animation: ${animate} .5s;

    > header img {
        width: 2rem;
        margin-left: .3rem;
    }

    > header p{
        font-size: 1.5rem;
    }

    @media(max-width: 770px){
        width: 100%;
        height: auto;
     
        > header h1 {
            font-size: 1.4rem;
            margin-bottom: 15px;

            > img {
                height: 20px;
                width: 20px;
            }
        }

        > header p {
            font-size: 1.2rem;
            margin-bottom: 25px;
        }

        > footer span {
            font-size: .8rem;
        }
        
    }

    @media(max-width: 420px) {
        width: 100%;
        height: auto;

        > header p {
            margin-bottom: 15px;
        }
    }
`;