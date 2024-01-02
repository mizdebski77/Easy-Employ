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
        filter: drop-shadow(6px 7px 8px ${({ theme }) => theme.color.fontMain});
    };
`;

export const Form = styled.form`
    display: grid;
    gap: 10px;
    max-width: 480px;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 16px;
    padding: 0 20px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Input = styled.input`
    padding:  12px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(to right, ${({ theme }) => theme.color.fourthColor}, ${({ theme }) => theme.color.secondColor});
    color: black;
    transition: 0.3s;

    &:focus {
        outline: none;
        filter: drop-shadow(6px 4px 4px ${({ theme }) => theme.color.fontMain});
    };
`;

export const Button = styled.button`
    max-width: 240px;
    width: 100%;
    margin: 20px auto;
    padding: 12px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.color.fontMain};
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;

export const RegisterWrapper = styled.div`

`;

