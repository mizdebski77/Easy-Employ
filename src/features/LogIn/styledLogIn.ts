import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 40px 12px;
    };
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 28px;
    };
`;

export const TitleSpan = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
`;

export const FormsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns: 1fr;
    };
`;

export const FormTitle = styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
    font-size: 36px;
    margin: 20px 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 20px;
    };
`;
export const FormContainer = styled.div`
    max-width: 1200px;
    width: 100%;
`;

export const Form = styled.form`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.fontMain};
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 40px 12px;
    };
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background: transparent;
    border: 2px solid white;
    font-size: 20px;
    outline: none;
    color: ${({ theme }) => theme.color.fontMain};
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
        border: 1px solid white;
    };
`;

export const Button = styled.button`
    margin: 0 auto;
    cursor: pointer;
    padding: 8px 80px;
    font-size: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.fontSecond};
    transition: 0.3s;
    border: none;

    &:hover {
        background: rgba(151, 208, 74, 0.8);
        box-shadow: 0 0 4px rgba(151, 208, 74, 0.8);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 8px 40px;
        font-size: 16px;
    };
`;