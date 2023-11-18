import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;
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
`;

export const FormTitle = styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
    font-size: 36px;
    margin: 20px 10px;
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
`;