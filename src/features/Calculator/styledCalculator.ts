import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const barGrow = keyframes`
    from { width: 0; }
`;

export const Wrapper = styled.main`
    max-width: 840px;
    margin: 0 auto;
    padding: 48px 54px;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.4s ease forwards;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 28px 16px;
    }
`;

export const PageHeader = styled.div`
    margin-bottom: 32px;
`;

export const Title = styled.h1`
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 6px;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 32px;
    margin-bottom: 16px;
`;

export const InputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: end;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        grid-template-columns: 1fr;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

export const Input = styled.input`
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentGlow};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { -webkit-appearance: none; }
`;

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const RadioLabel = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

export const RadioButtons = styled.div`
    display: flex;
    gap: 6px;
`;

export const CheckBox = styled.button<{ selected: boolean }>`
    flex: 1;
    padding: 10px 20px;
    border: 1.5px solid ${({ selected, theme }) => selected ? theme.color.fontMain : theme.color.borderSubtle};
    border-radius: 8px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    color: ${({ selected, theme }) => selected ? theme.color.fontMain : theme.color.fontMuted};
    cursor: pointer;
    background: ${({ selected, theme }) => selected ? theme.color.accentGlow : 'transparent'};
    transition: 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.color.fontMain};
        color: ${({ theme }) => theme.color.fontMain};
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 13px;
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

export const ResultWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        grid-template-columns: 1fr;
    }
`;

export const ResultTile = styled.div<{ highlight?: boolean }>`
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ highlight, theme }) => highlight ? theme.color.fontMain : theme.color.borderSubtle};
    border-radius: 14px;
    padding: 20px;
    transition: 0.2s;
    background: ${({ highlight, theme }) => highlight ? theme.color.accentGlow : theme.color.bgCard2};
`;

export const ResultTitle = styled.p`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-bottom: 8px;
    font-weight: 500;
`;

export const Result = styled.p<{ hasValue: boolean }>`
    font-family: 'Syne', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ hasValue, theme }) => hasValue ? theme.color.green : theme.color.fontSubtle};
    margin-bottom: 4px;
`;

export const ResultNote = styled.p`
    font-size: 11px;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-bottom: 8px;
`;

export const ProgressBarWrap = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border-radius: 4px;
    height: 4px;
    overflow: hidden;
`;

export const ProgressBar = styled.div<{ width: number }>`
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
    width: ${({ width }) => width}%;
    animation: ${barGrow} 0.6s ease forwards;
    transition: width 0.5s ease;
`;

export const DisclaimerWrapper = styled.div`
    background: ${({ theme }) => theme.color.amberBg};
    border: 1px solid rgba(245,158,11,0.2);
    border-radius: 12px;
    padding: 16px 20px;
    margin-top: 6px;
`;

export const DisclaimerTitle = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.amber};
    margin-bottom: 4px;
`;

export const DisclaimerText = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMuted};
    line-height: 1.6;
`;

export const FormWrapper = styled.div``;
export const Form = styled.form``;
