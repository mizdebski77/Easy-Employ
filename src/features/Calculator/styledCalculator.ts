import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 40px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 44px;
    font-weight: bold;
    margin-bottom: 80px;
`;

export const FormWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    box-shadow: 0 0 20px ${({ theme }) => theme.color.thirdColor};
`;

export const Form = styled.form`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
`;

export const Input = styled.input`
    padding: 10px;
    min-width: 400px;
    background: ${({ theme }) => theme.color.thirdColor};
    outline: none;
    border: none;
    border-radius: 10px;
`;

export const Label = styled.label`
    display: flex;
    gap: 10px;
    font-size: 20px;
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
    }
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
`;

export const ResultTile = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    color:${({ theme }) => theme.color.thirdColor};
    display: grid;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
`;

export const ResultTitle = styled.span`
    font-size: 24px;
    color: black;
`;

export const Result = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontMain};
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
`;

export const DisclaimerText = styled.span`
    font-size: 16px;
`;