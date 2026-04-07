import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 54px;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.4s ease forwards;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 24px 16px;
    }
`;

export const Title = styled.h1`
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
        grid-template-columns: 1fr;
    }
`;
