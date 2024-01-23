import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 40px;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px 12px;
    };
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 44px;
    font-weight: normal;
    margin-bottom: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        margin-bottom: 32px;
    };
`;

export const FormWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    box-shadow: 0 0 20px ${({ theme }) => theme.color.thirdColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 32px 12px;
    };
`;

export const Form = styled.form`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-direction:column;
    };
`;

export const Input = styled.input`
    padding: 10px;
    max-width: 400px;
    width: 100%;
    background: ${({ theme }) => theme.color.thirdColor};
    outline: none;
    border: none;
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 800px;
    };
`;

export const Label = styled.label`
    display: flex;
    gap: 10px;
    font-size: 20px;
    cursor: pointer;
`;

export const CheckBox = styled.input`
    padding: 10px;
    border-radius:20px;
    cursor: pointer;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 8px 64px;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.color.secondColor};
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        width: 100%;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const ResultWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.fontMain};
    margin-top: 40px;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px ${({ theme }) => theme.color.thirdColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        grid-template-columns: 1fr 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
        padding: 20px 12px;
    };
`;

export const ResultTile = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    color:${({ theme }) => theme.color.thirdColor};
    display: grid;
    border-radius: 10px;
    justify-content: center;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 12px;
    };
`;

export const ResultTitle = styled.span`
    font-size: 24px;
    color: black;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const Result = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const DisclaimerWrapper = styled.div`
    max-width: 500px;
    text-align: justify;
    margin: 0 auto;
`;

export const DisclaimerTitle = styled.h3`
    margin-top: 120px;
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        margin-top: 40px;
        font-size: 20px;
    };
`;

export const DisclaimerText = styled.span`
    font-size: 16px;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;