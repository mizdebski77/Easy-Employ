import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
`;

export const ContenWrapper = styled.div`

`;

export const BasicsInformation = styled.div`
    margin-top: 0;
    padding: 40px 0;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
`;

export const JobTitle = styled.h1`
    font-size: 52px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    margin-top: 0;
    text-align: center;
`;

export const JobTitleSpan = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 20px;
    font-size: 48px;
`;

export const InformationsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const InformationContainer = styled.div`
    display: grid;
    text-align: center;
    gap: 10px;
`;

export const InformationImage = styled.img`

`;

export const SpanWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const InformationTitle = styled.span`
    font-size: 28px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InformationSpan = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};

`;



export const CompanyName = styled.span`

`;

export const MapWrapper = styled.div`

`;