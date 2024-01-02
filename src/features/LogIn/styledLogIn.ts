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
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 320px;
    width: 100%;
`;

export const Icon = styled.img`
    max-width: 52px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    };
`;

export const Form = styled.form`
    display: grid;
    gap: 10px;
    max-width: 480px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 8px 10px;
    border-radius: 20px;

`;

export const Button = styled.button`
    max-width: 240px;
    width: 100%;
    margin: 0 auto;
`;

export const RegisterWrapper = styled.div`

`;

