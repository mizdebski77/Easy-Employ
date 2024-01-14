import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

export const ResetSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;

export const ResetTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ResetTitle = styled.h1`
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const ResetTitleButton = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 10px;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
    text-decoration: none;
    font-size: 24px;
    transition: 0.3s;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    &:hover {
        color: ${({ theme }) => theme.color.fontMainHover};
    };
`;


export const ResetFormWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    margin-top: 10px;
`;

export const ResetFormSpan = styled.h2`
    font-size: 20px;
    text-align: center;
    font-weight: normal;

`;

export const ResetForm = styled.form`
    display: grid;
`;

export const ResetLabel = styled.label`
    padding: 0 10px;
    margin-bottom: 8px;
`;

export const ResetInput = styled.input`
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.color.thirdColor};

    &:focus {
        outline: none;
    }
`;

export const ResetButton = styled.button`

`;




