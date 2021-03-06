import styled, {keyframes} from "styled-components";


interface ITagProps {
    color: string;
}

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

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    padding: .6rem .9rem;
    border-radius: .5rem;
    margin: .6rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;

    animation: ${animate} .8s ease-in-out;

    &:hover{
        opacity: .7;
        transform: translateX(.6rem);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: .4rem;
   
    }

    >div span {
        font-weight: bold;
        font-size: 1.1rem;
    }

`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: .8rem;
    height: 55%;
    position: absolute;
    left: 0;
`;