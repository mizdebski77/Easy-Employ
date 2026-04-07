import styled from "styled-components";

export const Wrapper = styled.div`
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 32px;
    color: #1a1a1a;
    min-height: 400px;
`;

export const PreviewName = styled.h2`
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
`;

export const PreviewTitle = styled.p`
    font-size: 14px;
    color: #4f8ef7;
    font-weight: 500;
    margin-bottom: 12px;
`;

export const PreviewPlaceholder = styled.p`
    font-size: 13px;
    color: #9090a8;
    text-align: center;
    padding: 40px 20px;
`;
