import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    padding: 40px;
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px 10px;
    };
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns: 1fr;
    };
`;

export const TilesWrapper = styled.div`
    display: grid;
    gap: 40px;
`;
