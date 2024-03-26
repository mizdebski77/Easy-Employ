import { Link } from "react-router-dom";
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

export const OffersContainer = styled.div`
    display: grid;
    gap: 32px;
`;

export const OfferTile = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px ;
    border-radius: 8px;
    gap: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 6px ${({ theme }) => theme.color.thirdColor};
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontSecond};

    &:hover {
        transform: scale(1.01);
    };


    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns: 1fr;
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
    justify-content: start;
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};
`;

export const Logo = styled.img`
    max-width: 84px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 54px;
    };
`;

export const TextSection = styled.div`
    display: grid;
    gap: 8px;
`;

export const OfferTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const BasicsInformations = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

export const OfferCaptionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        gap:10px;
    };
`;

export const OfferCaptionTitle = styled.span`
    font-size: 16px; 
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const Img = styled.img`
    max-width: 24px;
    width: 100%;
`;

export const TechStackWrapper = styled.div`
    padding: 16px 20px 0;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

export const TechStackSpan = styled.span`
    background: ${({ theme }) => theme.color.fontMainHover};
    padding: 4px 12px;
    color: white;
    border-radius: 40px;
`;
