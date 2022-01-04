import styled from "styled-components";

interface ILegendProps{
    color: string;
}

export const Container = styled.div`
   width: 100%;
   height: 18rem;

   background-color: ${props => props.theme.colors.tertiary};
   color: ${prpops => prpops.theme.colors.white};

   margin: .6rem 0;
   padding: 1.5rem 1.2rem;

   border-radius: .7rem;

   

`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 12.8rem;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
       margin-bottom: .8rem;
       padding-left: .8rem;
   }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 1.2rem;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    
    margin-bottom: .5rem;
    margin-left: .5rem;
    
    > div {
        background-color: ${props => props.color};
        border-radius: .3rem;
        width: 2.8rem;
        height: 2.8rem;
        
        font-size: .9rem;
        line-height: 2.8rem;
        text-align: center;

    }

    > span {
        margin-left: .3rem;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    
`;
