import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1500px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        margin: 0px auto;
    };
`;

export const OffersTitle = styled.h3`
    text-align: center;
    font-size: 52px;
    letter-spacing: 4px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
    };
`;

export const OfferWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns: 1fr 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
    };
`;

export const OfferTile = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 2px ${({ theme }) => theme.color.fontSecond};
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    gap: 20px;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontSecond};

    &:hover {
        box-shadow: 0 0 2px ${({ theme }) => theme.color.fontMain};
        transform: scale(1.03);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        &:hover {
            box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
            transform: scale(1);
        };  
        border-radius: 10px;

    };
`;

export const OfferTitle = styled.span`
    font-size: 24px;
    color:${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const OfferArticle = styled.div`
    display: grid;
    align-items: center;
    justify-content: start;
    gap: 10px ;
`;

export const OfferLogo = styled.img`
    max-width: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 64px;
    };
`;

export const OfferDetails = styled.span`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const AllOffersButton = styled(Link)`
    padding: 12px 40px;
    background: ${({ theme }) => theme.color.fontMain};
    border: none;
    display: block;
    margin-top: 40px;
    max-width: 200px;
    width: 100%;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    transition: 0.3s;
    float: right;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
        max-width: 160px;
        padding: 10px 20px;
    };
`;
