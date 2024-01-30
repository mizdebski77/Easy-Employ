import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
`;

export const ContenWrapper = styled.div`

`;

export const BasicsInformation = styled.div`
    background-color: red;
    margin-top: 0;
    padding: 40px 0;
`;

export const JobTitle = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    margin-top: 0;
    text-align: center;
`;

export const JobTitleSpan = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const CompanyName = styled.span`

`;

export const MapWrapper = styled.div`

`;