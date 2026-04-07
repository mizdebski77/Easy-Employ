import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    gap: 20px;
`;

export const Spinner = styled.div`
    width: 44px;
    height: 44px;
    border: 2px solid ${({ theme }) => theme.color.borderSubtle};
    border-top-color: ${({ theme }) => theme.color.fontMain};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;

export const Title = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
    text-align: center;
    animation: ${pulse} 2s ease-in-out infinite;
    max-width: 320px;
    line-height: 1.6;

    p {
        font-size: 12px;
        color: ${({ theme }) => theme.color.fontSubtle};
        margin-top: 6px;
    }
`;
