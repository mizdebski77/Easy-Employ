import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns: 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 40px 12px;
    };
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const LoginTitle = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    margin-bottom: 0px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
    };
`;

export const LoginSpan = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 320px;
    width: 100%;
`;

export const Icon = styled.img`
    max-width: 52px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(6px 7px 8px ${({ theme }) => theme.color.fontMain});
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 36px;
    };
`;

export const Form = styled.form`
    display: grid;
    gap: 10px;
    max-width: 480px;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 16px;
    padding: 0 20px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
        padding: 0 12px;
    };
`;

export const Input = styled.input`
    padding:  12px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(to right, ${({ theme }) => theme.color.fourthColor}, ${({ theme }) => theme.color.secondColor});
    color: black;
    transition: 0.3s;

    &:focus {
        outline: none;
        filter: drop-shadow(6px 4px 4px ${({ theme }) => theme.color.fontMain});
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 8px;
        font-size: 14px;
    };
`;

export const ShowHideButton = styled.button`
    border: none;
    max-width: 160px;
    margin: auto;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        color: ${({ theme }) => theme.color.fontMainActive};
    };
`;

export const Button = styled.button`
    max-width: 240px;
    width: 100%;
    margin: 20px auto;
    padding: 12px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.color.fontMain};
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;

export const RegisterWrapper = styled.div`
    background: linear-gradient(309deg, rgba(230,230,230,1) 12%, rgba(0,150,255,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
`;

export const RegisterTitle = styled.h2`
    font-size: 54px;
    font-weight: normal;
    margin-bottom: 10px;
`;

export const RegisterButton = styled(Link)`
    text-decoration: none;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 12px 80px;
    color: black;
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
        filter: drop-shadow(16px 7px 8px ${({ theme }) => theme.color.fontMain});
    };      
`;

export const RegisterCaption = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: normal;
    text-align: center;
`;

