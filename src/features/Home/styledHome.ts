import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const Captions = styled.h2`
    font-size: 40px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;
`;

export const CaptionNumber = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.color.fontMain};
`;

