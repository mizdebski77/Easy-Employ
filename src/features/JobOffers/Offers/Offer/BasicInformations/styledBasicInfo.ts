import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 8px;
`;

export const TitleWrapper = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.color.fourthColor};
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 40px 16px 20px;
        gap: 16px;
    };
`;

export const TitleImg = styled.img`
    max-width: 120px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 60px;
    };
`;

export const Position = styled.h1`
    font-size: 44px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontMain};
    margin: 0 0 8px 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const CompanyName = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const InformationsWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        flex-wrap: wrap;
        gap: 12px;
    };
`;

export const InfomrationsContainer = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        justify-content: start;
    };
`;

export const InformationImg = styled.img`
    max-width: 32px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 24px;
    };
`;

export const TextWrapper = styled.div`
    display: grid;
`;

export const InformationTitle = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const InformationSpan = styled.span`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 10px;
    };
`;
