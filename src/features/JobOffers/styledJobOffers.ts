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
    justify-content: space-around;
`;

export const Input = styled.input`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    min-width: 280px;

    &:focus {
        outline: none;
    }
`;

export const Select = styled.select`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    min-width: 280px;
    cursor: pointer;

    @media (max-width:${({ theme }) => theme.breakPoint.thirdBp}px) {
        font-size: 14px;
    }

    
    &:focus {
        outline: none;
    }
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
`;

export const Legend = styled.legend`
    font-size: 24px;
    padding: 0 10px;
`;

export const KeyWordContainer = styled.div`
    position: relative;
`;

export const KeyWord = styled.span`
    background: ${({ theme }) => theme.color.fontMainActive};
    padding: 8px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.mainColor};
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
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 40px;
`;

export const OfferTile = styled.div`
    background: ${({ theme }) => theme.color.thirdColor};
    padding: 20px;
    border-radius: 20px;
`;

export const OfferTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    font-size: 28px;
`;

export const OfferCaptionWrapper = styled.div`
    max-width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const OfferCaptionTitle = styled.span`
    font-size: 20px; 
    color: ${({ theme }) => theme.color.fontMain};
`;

export const OfferCaptionTContent = styled.span`
    font-size: 16px;
`;


export const FavButton = styled.button`

`;

