import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
    };
`;

export const ResetSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px;
    };
`;

export const ResetTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ResetTitle = styled.h1`
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 28px;
    };
`;

export const ResetTitleButton = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 10px;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
    text-decoration: none;
    font-size: 24px;
    transition: 0.3s;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};

    &:hover {
        color: ${({ theme }) => theme.color.fontMainHover};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;


export const ResetFormWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    margin-top: 10px;
`;

export const ResetFormSpan = styled.h2`
    font-size: 20px;
    text-align: center;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const ResetForm = styled.form`
    display: grid;
`;

export const ResetLabel = styled.label`
    padding: 4px 10px 0;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;

export const ResetInput = styled.input`
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.color.thirdColor};

    &:focus {
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const ResetButton = styled.button`
    background: ${({ theme }) => theme.color.fontMain};
    margin-top: 20px;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;




