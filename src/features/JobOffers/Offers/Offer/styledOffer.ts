import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    padding: 40px;
`;

export const InformationTile = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 80px;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
`;

export const TitleWrapper = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.color.fourthColor};
    padding: 0 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const TitleImg = styled.img`
    max-width: 120px;
`;

export const Title = styled.h1`
    font-size: 52px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontMain};
    margin: 0px;
`;

export const TitleSpan = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 24px;
`;

export const InformationsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
`;

export const InfoImg = styled.img`
    max-width: 64px;
    width: 100%;
`;

export const InfoTextWrapper = styled.div`
    display: grid;
`;

export const SectionTitle = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const SpanTitle = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InfoSpan = styled.span`
    font-size: 20px;
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

export const Details = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const MapWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
`;

export const Map = styled.img`
    height: 100%;
    width: 100%;
`;

export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
`;

export const DetailsSection = styled.div`
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondColor};
`;

export const DetailTitle = styled.h2`
    padding: 40px;
    margin: 0;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
`;

export const DetailsSpan = styled.span`

`;