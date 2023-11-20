import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`

`;

export const MenuButton = styled.button`
    background: ${({ theme }) => theme.color.fontMain};
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
    position: fixed;
    z-index: 1;

`;

export const Title = styled.h1`
    text-align: center;
    margin: 80px 0;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: normal;
    font-size: 36px;
`;

export const LinksWrapper = styled.div`
    display: grid;
    font-size: 24px;
    justify-content: center;
    gap: 32px;
`;

export const LinkWrapper = styled.div`
    display: flex;
`;

export const Links = styled(Link)`
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    padding: 0 0px 10px 30px ;
    border-bottom: 1px solid white;
    transition: 0.4s;

    &:hover {
        transform: scale(1.05);
    }
`;

