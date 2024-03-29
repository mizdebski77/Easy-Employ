import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 12px;
    };
`;

export const SignUpPanel = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        padding: 20px 10px;
    };
`;

export const RegisterTitle = styled.h1`
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;
    font-size: 48px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 28px;
    };
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
    border-radius: 8px;
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

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 24px;
    };
`;

export const IconSpan = styled.span`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;

export const Label = styled.label`
    margin: 20px 20px 10px 12px;
    cursor: pointer;
`;

export const PasswordLabel = styled.div`
    display: flex;
    background: white;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    max-width: 400px;
    width: 100%;
`;

export const PasswordInput = styled.input`
    padding:  12px;
    border: none;
    color: black;
    transition: 0.3s;
    max-width: 400px;
    border-radius: 8px;
    width: 100%;

    &:focus {
        outline: none;
    };
`;

export const ShowHideButton = styled.img`
    padding-right: 20px;
    cursor: pointer;
    max-width: 60px;
`;

export const Input = styled.input`
    padding:  12px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    color: black;
    transition: 0.3s;
    max-width: 400px;
    width: 100%;

    &:focus {
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 8px;
        font-size: 14px;
    };
`;

export const CheckBox = styled.input`
    cursor: pointer;
    margin-right: 10px;
`;

export const InfosWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const InformationSpan = styled.span`
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 20px;
    font-family: Open Sans;
`;

export const SpanColor = styled.span`
    color: red;
`;

export const CreateAccountButton = styled.button`
    margin-top: 20px;
    padding: 10px;
    max-width: 360px;
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.color.fontMain};
    color: white;
    border: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;
