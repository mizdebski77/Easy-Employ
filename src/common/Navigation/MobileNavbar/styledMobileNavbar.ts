import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 68px;
    left: 0;
    width: 80%;
    max-width: 320px;
    height: calc(100vh - 68px);
    background: ${({ theme }) => theme.color.bgCard};
    border-right: 1px solid ${({ theme }) => theme.color.borderSubtle};
    z-index: 99;
    display: flex;
    flex-direction: column;
    padding: 24px 20px;
    gap: 4px;
`;

export const NavbarLink = styled(NavLink)`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    text-decoration: none;
    padding: 12px 16px;
    border-radius: 10px;
    transition: 0.2s;

    &:hover, &.active {
        color: ${({ theme }) => theme.color.fontMain};
        background: ${({ theme }) => theme.color.accentGlow};
    }
`;

export const ImgWrapper = styled.div`
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LinkImg = styled(Link)`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};
    text-decoration: none;
    padding: 10px 16px;
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 8px;
    transition: 0.2s;
    text-align: center;

    &:hover {
        color: ${({ theme }) => theme.color.fontSecond};
        border-color: ${({ theme }) => theme.color.borderMid};
    }
`;

export const Img = styled.img`
    display: none;
`;
