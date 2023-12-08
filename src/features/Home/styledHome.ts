import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const Captions = styled.h2`
    font-size: 40px;
    font-weight: normal;
    color: ${({theme}) => theme.color.fontSecond};
    text-align: center;
`;

export const CaptionNumber = styled.span`
    font-weight: bold;
    color: ${({theme}) => theme.color.fontMain};
`;

export const OffersWrapper = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 20px;
`;

export const OffersTitle = styled.h3`
    text-align: center;
    font-size: 44px;
    font-weight: normal;
    color: ${({theme}) => theme.color.fontMain};
`;

export const OfferWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 20px;
`;

export const OfferTile = styled.div`
    background: ${({theme}) => theme.color.secondColor};
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px ${({theme}) => theme.color.fontSecond};
    display: grid;
    gap: 20px;
`;

export const OfferTitle = styled.span`
    font-size: 24px;
    text-align: center;
    color:${({theme}) => theme.color.fontMain}
`;

export const OfferArticle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px ;
`;

export const OfferLogo = styled.img`
    max-width: 80px;
`;

export const OfferDetails = styled.span`
    font-size: 20px;
`;

export const FavoriteButton = styled.button`

`;  