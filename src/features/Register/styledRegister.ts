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
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const RegisterTitle = styled.h1`
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;
    font-size: 48px;
`;

export const IconsWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 10px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.fontMainActive};
    }
`;

export const Icon = styled.img`
    max-width: 40px;
    width: 100%;
`;

export const IconSpan = styled.span`
    font-size: 16px;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Label = styled.label`

`;
export const Input = styled.input`

`;


export const InformationSpan = styled.span`

`;

export const SpanColor = styled.span`
    color: red;
`;

export const CreateAccountButton = styled.button`

`;

