import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.main`
    min-height: calc(100vh - 68px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.4s ease forwards;
`;

export const LoginWrapper = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 20px;
    padding: 36px 40px;
    width: 100%;
    max-width: 420px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 24px 20px;
    }
`;

export const LoginTitle = styled.h1`
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 6px;
`;

export const LoginSpan = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
    margin-bottom: 20px;
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
`;

export const Icon = styled.img`
    display: none;
`;

export const SocialButton = styled.button`
    flex: 1;
    padding: 9px;
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.color.borderMid};
        color: ${({ theme }) => theme.color.fontSecond};
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-bottom: 20px;

    &::before, &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${({ theme }) => theme.color.borderSubtle};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentGlow};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const PasswordLabel = styled.div`
    position: relative;
`;

export const PasswordInput = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 8px;
    padding: 10px 40px 10px 12px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentGlow};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const ShowHideButton = styled.img`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    cursor: pointer;
    opacity: 0.4;
    filter: brightness(3);
    transition: 0.2s;

    &:hover { opacity: 0.8; }
`;

export const PasswordFunctionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RememberMeWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
`;

export const RememberMeInput = styled.input`
    accent-color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
`;

export const RememberMeSpan = styled.span``;

export const ForgotPasswordButton = styled(Link)`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;

    &:hover { text-decoration: underline; }
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: 0.22s;
    margin-top: 4px;

    &:hover {
        opacity: 0.88;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(79,142,247,0.4);
    }
`;

export const RegisterWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
`;

export const RegisterTitle = styled.span``;
export const RegisterCaption = styled.span``;

export const RegisterButton = styled(Link)`
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover { text-decoration: underline; }
`;
