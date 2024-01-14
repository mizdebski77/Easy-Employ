import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

export const ResetSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`;

export const ResetTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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

`;

export const ResetFormSpan = styled.span`

`;

export const ResetForm = styled.form`

`;

export const ResetInput = styled.input`

`;

export const ResetButton = styled.button`

`;




