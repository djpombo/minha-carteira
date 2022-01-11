import styled from "styled-components";

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .3rem;
    
    
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

    > h1 {
        color: ${props => props.theme.colors.white};

        &::after {
            content: '';
            display: block;
            width: 3.5rem;
            border-bottom: 10px solid ${props => props.lineColor};
        }
    }

    @media(max-width: 600px){
        font-size: .7rem;

        &::after {
            content: '';
            display: block;
            width: 3.5rem;
            border-bottom: 1px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    
`;