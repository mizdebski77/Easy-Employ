import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    gap: 40px;
`;

export const ContenWrapper = styled.div`

`;

export const BasicsInformation = styled.div`
    margin-top: 0;
    padding: 40px 0;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    max-width: 1920px;
    margin: 0 auto;
    margin-bottom: 64px;
`;


export const Title = styled.h1`
    font-size: 52px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    margin: 10px;
    padding: 0 0 20px ;
    text-align: center;
`;

export const TitleSpan = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 40px;
    font-size: 48px;
    text-align: center;
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

export const DetailsWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const MapWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
`;

export const Map = styled.img`
    height: 100%;
    width: 100%;
`;

export const DetailsContainer = styled.div`
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    border-radius: 20px;
`;