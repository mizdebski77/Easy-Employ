import { styled } from "styled-components";

export const Wrapper = styled.div`

`;

export const MenuButton = styled.button`
    background: ${({theme}) => theme.color.fontMain};
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: none;
    position: fixed;
    margin: 10px 0 0 10px;
    z-index: 10;
`;

export const MenuWrapper = styled.div`
    background: ${({ theme }) => theme.color.fontMain};
    min-height: 100vh;
    max-width: 320px;
    width: 100%;
    padding: 20px;
    border-radius: 0px 120px 120px 0;

`;

export const Title = styled.h1`
    text-align: center;
    margin: 80px 0;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: normal;
    font-size: 36px;
`;

