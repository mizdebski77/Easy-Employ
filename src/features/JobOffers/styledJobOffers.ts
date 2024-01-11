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

export const FormWrapper = styled.div`
    background: ${({ theme }) => theme.color.thirdColor};
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 32px 12px;
    };
`;

export const Input = styled.input`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    max-width: 280px;
    width: 100%;

    &:focus {
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 480px;
        width: 100%;
    };
`;

export const Select = styled.select`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    max-width: 280px;
    width: 100%;
    cursor: pointer;

    @media (max-width:${({ theme }) => theme.breakPoint.thirdBp}px) {
        font-size: 14px;
        max-width: 480px;
        width: 100%;
    }

    
    &:focus {
        outline: none;
    };
`;

export const Option = styled.option`
    cursor: pointer;
`;

export const SearchButton = styled.button`
    padding: 8px 64px;
    background: ${({ theme }) => theme.color.fontMain};
    border-radius: 10px;
    border:none;
    color:${({ theme }) => theme.color.secondColor};
    cursor: pointer;
    transition: 0.3s;


    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };

    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 280px;
        width: 100%;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 480px;
        width: 100%;
    };
`;


export const KeyWordsWrapper = styled.fieldset`
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.fontMainActive};
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        justify-content: center;
    };
`;

export const Legend = styled.legend`
    font-size: 24px;
    padding: 0 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const KeyWordContainer = styled.div`
    position: relative;
`;

export const KeyWord = styled.span`
    background: ${({ theme }) => theme.color.fontMainActive};
    padding: 8px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.mainColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;

export const RemoveButton = styled.button`
    position: absolute;
    border-radius: 50%;
    font-size: 12px;
    background: #ff2d32;
    color: white;
    border: none;
    right: 2px;
    bottom: 20px;
    cursor: pointer;
`;

export const OffersWrapper = styled.div`

`;

export const OffersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 1200px;
    margin: 40px auto;
    justify-content: center;
    gap: 40px;
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

