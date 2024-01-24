import { styled } from "styled-components";

export const Wrapper = styled.section`

`;

export const OffersTitle = styled.h2`
    text-align: center;
    margin:0px;
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 40px;
`;

export const OfferTile = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px 40px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 32px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 6px ${({ theme }) => theme.color.thirdColor};
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 6px ${({ theme }) => theme.color.fontMainHover};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        padding: 20px 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding: 12px;

        &:hover {
        transform: scale(1);
        box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMainHover};
    };
    };
`;

export const MainSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.img`
    max-width: 64px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 54px;
    };
`;

export const OfferTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 24px;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CaptionsContainer = styled.div`
    display: grid;
    justify-content: space-between;
`;

export const OfferCaptionWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        gap:10px;
    };
`;

export const OfferCaptionTitle = styled.span`
    font-size: 18px; 
    color: ${({ theme }) => theme.color.fontMain};
    min-width: 120px;
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const OfferCaptionTContent = styled.span`
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;



