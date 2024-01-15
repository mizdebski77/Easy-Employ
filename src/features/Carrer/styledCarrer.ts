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

export const MainWrapper = styled.main`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`;

export const PhotoSection = styled.div`
    border: 2px solid ${({ theme }) => theme.color.fontMain};
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    padding: 80px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
`;

export const Photo = styled.img`
    max-width: 120px;
`;

export const Name = styled.h1`
    font-size: 32px;
    font-weight: normal;

`;


export const ContentWrapper = styled.div`
    display: grid;
    justify-content: start;
    align-items: center;
`;

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LocationImg = styled.img`
    max-width: 28px;
`;

export const LocationSpan = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const TitleWrapper = styled.div`

`;

export const TitleSpan = styled.span`

`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const EditButton = styled.button`
    color: ${({ theme }) => theme.color.secondColor};
    background: ${({ theme }) => theme.color.fontMain};
    padding: 8px 40px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;


