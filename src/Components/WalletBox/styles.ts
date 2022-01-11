import styled from "styled-components";

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 10rem;
    margin: .5rem 0;
    background-color: ${props => props.color};
    border-radius: .6rem;
    padding: 1rem 2rem;
    color: ${props => props.theme.colors.white};
    position: relative;
    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        top: -0.8rem;
        right: -2rem;

        opacity: .3;
    }

    > span {
        font-size: 1.2rem;
        font-weight: 700;
    }

    > small {
        font-size: .8rem;
        position: absolute;
        bottom: .8rem;
    }

    @media(max-width: 770px){
        > span {
            font-size: .8rem;
            
        }

        > h1 {
            word-wrap: break-word;
            font-size: 1.2rem;

            > strong {
                display: inline-block;
                width: 100%;
                font-size: .6rem;
            }
        }

        > small {
            word-wrap: break-word;
            font-size: .5rem;
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            font-size: 1.4rem;
            > strong {
                position: initial;
                width: auto;
                font-size: 1.4rem;
            }
            
            > strong::after{
                display: inline-block;
                content: ' ';
                width: 1px;
            }
        }
    }
    
`;

