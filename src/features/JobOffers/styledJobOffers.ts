import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 54px;
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
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
    };
`;

export const OffersTitle = styled.h2`
    text-align: center;
    margin:0px;
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 40px;
`;

export const FiltersWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 6px ${({ theme }) => theme.color.thirdColor};
    border-radius: 10px;
`;

export const FilterTitle = styled.h3`
    font-size: 28px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
    margin: 0;
`;

export const FilterCategory = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
    padding: 20px 10px ;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const List = styled.div`
    margin-top: 20px;
`;


export const ListItemWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 8px;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.mainColor};
    }
`;

export const FilterCountSpan = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMainHover};
`;

export const ListItem = styled.span`

`;

export const ListCheckbox = styled.input`

`;

export const Arrow = styled.button`
    color: ${({ theme }) => theme.color.fontMain};
    background: none;
    border: none;
    cursor: pointer;
`;

export const Category = styled.span`

`;

export const MainSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
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

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const OfferTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 24px;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const Logo = styled.img`
    max-width: 64px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 54px;
    };
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


export const FavButton = styled.button`

`;

