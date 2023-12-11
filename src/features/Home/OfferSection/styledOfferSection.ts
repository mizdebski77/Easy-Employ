import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 20px;
`;

export const OffersTitle = styled.h3`
    text-align: center;
    font-size: 44px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const OfferWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 30px;
`;

export const OfferTile = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    display: grid;
    gap: 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
        transform: scale(1.03);
    }
`;

export const OfferTitle = styled.span`
    font-size: 24px;
    text-align: center;
    color:${({ theme }) => theme.color.fontMain}
`;

export const OfferArticle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px ;
`;

export const OfferLogo = styled.img`
    max-width: 80px;
`;

export const OfferDetails = styled.span`
    font-size: 20px;
`;

export const AllOffersButton = styled(Link)`
    padding: 12px 40px;
    background: ${({ theme }) => theme.color.fontMain};
    border: none;
    display: block;
    margin-top: 40px;
    max-width: 200px;
    width: 100%;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    transition: 0.3s;
    float: right;

    &:hover {
        background: ${({theme}) => theme.color.fontMainHover};
    }
`;