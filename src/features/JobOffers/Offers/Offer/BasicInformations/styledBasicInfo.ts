import { styled } from "styled-components";

export const Wrapper = styled.section`
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

export const Position = styled.h1`
    font-size: 52px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontMain};
    margin: 0px;
`;

export const CompanyName = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 24px;
`;

export const InformationsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`;

export const InfomrationsContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
`;

export const InformationImg = styled.img`
    max-width: 64px;
    width: 100%;
`;

export const TextWrapper = styled.div`
    display: grid;
`;

export const InformationTitle = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InformationSpan = styled.span`
    font-size: 20px;
`;
