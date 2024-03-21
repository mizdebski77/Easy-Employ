import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 10px;
`;

export const Form = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
    };
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    margin: 0 0 20px ;
    text-align: center;
    font-size: 32px;
`;

export const InputWrapper = styled.div`
    background: ${({ theme }) => theme.color.mainColor};
    border-radius: 8px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 720px;
    margin: 0 auto;
`;


export const KeyWordInput = styled.input`
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    background: ${({ theme }) => theme.color.mainColor};

    &:focus {
        outline:none;
    }
`;

export const SearchButton = styled.button`
    padding: 8px 52px;
    word-break: keep-all;
    background: ${({ theme }) => theme.color.fontMain};
    border-radius: 0 8px 8px 0;
    width: 100%;
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
    margin: 20px auto 0;
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
    padding: 8px 16px;
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
    transition: 0.3s;

    &:hover {
        background: #ff8484;
    }
`;

