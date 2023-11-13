import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav <{ homeScreen?: boolean }>`
    padding: 20px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
`;

export const LogoImg = styled.img`
    max-width: 64px;
`;

export const LogoText = styled.span`
    font-size: 40px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    letter-spacing: 2px;
`;

export const LogoFirstLetters = styled.span`
    -webkit-text-stroke:1px ${({ theme }) => theme.color.fontMain};
    -webkit-text-fill-color:transparent;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;
`;

export const NavbarLink = styled(NavLink)`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.fontSecond};
    };
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 80px;
`;

export const LinkImg = styled.img`
    width: 64px;
    height: 64px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    };
`;

