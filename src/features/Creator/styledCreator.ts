import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const ContentWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`;

export const FormsWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
`;

export const CVPreview = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
`;

