import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    width: 100%;
`;

export const ApplyTitle = styled.h3`
    font-size: 32px;
    text-align: center;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Form = styled.form`
    width: 100%;
    border-radius: 20px;
    border: 2px dashed ${({ theme }) => theme.color.fontMain};
    padding: 40px;
`;

export const InputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 20px;
    padding: 10px 20px;
`;