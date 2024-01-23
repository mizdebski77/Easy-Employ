import styled from "styled-components";

export const Wrapper = styled.section`

`;

export const CVPreview = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    padding: 40px 20px;
    font-size: 20px;
    text-align: center;
    display: grid;
    gap: 10px;
`;

export const CVTitle = styled.span`
    font-size: 14px;
    margin-bottom: 20px;
`;


export const CVName = styled.span`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ElementsWrapper = styled.div`
    display: grid;
    gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};
    padding-bottom: 20px;
`;

export const SpanWrapper = styled.div`
    font-size: 16px;
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const TitleSpan = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
    justify-self: start;
    font-size: 18px;
`;

export const ContentSpan = styled.span`
    font-weight: normal;
`;

export const ExpWrapper = styled.div`
    display: grid;
    gap: 12px;
    justify-content
`;

export const TilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 44px;
`;

export const ExpDuration = styled.span`
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const ExpContent = styled.span`
    font-size: 16px;
    font-weight: normal;
    max-width: 440px;
    text-align: left;
`;

export const ExpSecondTitle = styled.span`
    justify-self: start;
    margin-left: 20px;
    font-size: 18px;
    font-weight: normal;
`;

export const TextsWrapper = styled.div`
    display: flex;
    justify-content: start;
    padding: 0 20px;
    font-size: 16px;
    font-weight: normal;
    justify-self: start;
    text-align: left;
`;

export const Link = styled.a`
    text-align: left;
    font-size: 16px;
    margin-bottom: 12px;
`;

export const ClausuleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Clausule = styled.span`
    font-size: 14px;
    text-align: left;
`;

export const CVSectionTitle = styled.h3`
    font-size: 20px;
    font-weight: normal;
`;