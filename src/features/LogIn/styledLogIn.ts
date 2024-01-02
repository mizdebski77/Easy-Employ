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

`;

export const LoginTitle = styled.h1`

`;

export const RegisterWrapper = styled.div`

`;

