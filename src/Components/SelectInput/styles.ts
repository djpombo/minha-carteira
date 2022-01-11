import styled from "styled-components";

export const Container = styled.div`
  
    > select {
        padding: .4rem .7rem;
        border-radius: .4rem;
        margin-left: .7rem;
               
        }
    
    @media(max-width: 600px){
        > select {
            padding: .5rem .5rem;
            border-radius: .2rem;
            margin-left: .1rem;
        }
    }

`;