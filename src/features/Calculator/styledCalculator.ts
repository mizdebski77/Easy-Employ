import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 40px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 44px;
    font-weight: bold;
`;

export const FormWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
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