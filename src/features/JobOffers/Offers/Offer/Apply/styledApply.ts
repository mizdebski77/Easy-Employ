import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    width: 100%;
`;

export const ApplyTitle = styled.h3`
    font-size: 32px;
    text-align: center;
    font-weight: normal;
    padding: 0 0 20px 0;
    color: ${({ theme }) => theme.color.fontSecond};
`;