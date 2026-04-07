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

export const Card = styled.div`
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

export const Title = styled.h1`
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 6px;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
    margin-bottom: 24px;
    line-height: 1.5;
`;

export const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    display: block;
    margin-bottom: 6px;
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
    margin-bottom: 16px;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentGlow};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
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

    &:hover {
        opacity: 0.88;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(79,142,247,0.4);
    }
`;

export const BackLink = styled.div`
    margin-top: 18px;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
    transition: 0.2s;

    &:hover { text-decoration: underline; }
`;
