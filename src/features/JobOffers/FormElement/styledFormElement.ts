import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.thirdColor};
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
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

export const InputWrapper = styled.div`
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    max-width: 280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const KeyWordInput = styled.input`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    max-width: 280px;
    width: 100%;

    &:focus {
        outline:none;
    }
`;

export const AddKeyWordButton = styled.button`
    border-radius: 0 8px 8px 0;
    border: none;
    padding: 0 20px;
    background: ${({ theme }) => theme.color.fontMain};
    color: white;
    cursor: pointer;
    transition:0.3s;
    
    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:disabled {
        opacity: 0.2;
        cursor: no-drop;

        &:hover {
            background: ${({ theme }) => theme.color.fontMain};
        }
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

