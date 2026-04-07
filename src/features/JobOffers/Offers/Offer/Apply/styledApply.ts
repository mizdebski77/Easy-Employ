import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 24px;
    position: sticky;
    top: 88px;
`;

export const ApplyTitle = styled.h3`
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 14px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FormLabel = styled.label`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
`;

export const FormInput = styled.input<{ hasError?: boolean }>`
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ hasError, theme }) => hasError ? theme.color.red : theme.color.borderSubtle};
    border-radius: 8px;
    padding: 9px 12px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;
    width: 100%;

    &:focus {
        border-color: ${({ hasError, theme }) => hasError ? theme.color.red : theme.color.fontMain};
        box-shadow: 0 0 0 3px ${({ hasError, theme }) => hasError ? theme.color.redBg : theme.color.accentGlow};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const ErrorText = styled.p`
    font-size: 11px;
    color: ${({ theme }) => theme.color.red};
    margin-top: 2px;
`;

export const LabelWrapper = styled.div`
    margin-bottom: 14px;
`;

export const FileWrapper = styled.div`
    border: 1.5px dashed ${({ theme }) => theme.color.borderMid};
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    background: ${({ theme }) => theme.color.bgCard2};

    &:hover {
        border-color: ${({ theme }) => theme.color.fontMain};
        background: ${({ theme }) => theme.color.accentGlow};
    }
`;

export const FileWrapper2 = styled.div`
    border: 1.5px dashed ${({ theme }) => theme.color.green};
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background: ${({ theme }) => theme.color.greenBg};
    cursor: default;
`;

export const FileImg = styled.img`
    width: 28px;
    height: 28px;
    margin: 0 auto 8px;
    display: block;
    opacity: 0.5;
    filter: brightness(3);
`;

export const FileName = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
`;

export const FileNameSuccess = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.green};
    font-weight: 500;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.red};
    cursor: pointer;
    font-size: 13px;
    margin-top: 6px;
    font-family: 'DM Sans', sans-serif;
    transition: 0.2s;

    &:hover { opacity: 0.7; }
`;

export const ApplyButton = styled.button`
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

    &:hover:not(:disabled) {
        opacity: 0.88;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(79,142,247,0.4);
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`;
