import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 28px;
    };
`;



export const OffersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1200px;
    margin: 40px auto;
    justify-content: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
    };
`;