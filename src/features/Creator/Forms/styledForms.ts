import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 24px;
`;

export const SectionTitle = styled.h3`
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
`;

export const FormGroup = styled.div`
    margin-bottom: 14px;
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
    padding: 9px 12px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;
