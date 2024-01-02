import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 40px;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 40px 12px;
    };
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const LoginTitle = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    margin-bottom: 0px;
`;

export const LoginSpan = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Icon = styled.img`
    max-width: 64px;
`;


export const RegisterWrapper = styled.div`

`;

