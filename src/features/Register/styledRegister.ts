import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SignUpPanel = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
`;

export const RegisterTitle = styled.h1`
    font-weight: normal;
    color: ${({theme}) => theme.color.fontSecond};
    text-align: center;
    font-size: 48px;
`;

export const IconsWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const IconContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 10px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`;

export const Icon = styled.img`
    max-width: 48px;
    width: 100%;
`;

export const IconSpan = styled.span`
    font-size: 20px;
`;

export const Span = styled.span`

`;

export const CreateAccountButton = styled.button`

`;

export const Form = styled.form`

`;

export const Input = styled.input`

`;