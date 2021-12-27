import styled from "styled-components";




export const Container = styled.div``;

export const Content = styled.main`
   

   
`;

export const Filters = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 1.2rem;

    .tag-filter {
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${props => props.theme.colors.white};

        background: none;

        margin: 0 .8rem;
        
        opacity: .2;
        transition: opacity .3s;
        &:hover {
            opacity: .7;
        }
        
    }
    
    .tag-filter-recurent::after {
            content: '';
            display: block;
            width: 3.5rem;
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }
    
    .tag-filter-eventuals::after {
        content: '';
        display: block;
        width: 3.5rem;
        border-bottom: 10px solid ${props => props.theme.colors.warining};
    }

    .tag-actived {
        opacity: 1;
    }
`;

