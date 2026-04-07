import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 54px;
    height: 68px;
    position: sticky;
    z-index: 100;
    top: 0;
    background: rgba(10,10,15,0.88);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px) {
        padding: 0 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 0 16px;
    }
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    flex-shrink: 0;
`;

export const LogoDot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.fontMain};
    box-shadow: 0 0 12px ${({ theme }) => theme.color.fontMain};
    flex-shrink: 0;
`;

export const LogoText = styled.span`
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        font-size: 16px;
    }
`;

export const LogoFirstLetters = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
        display: none;
    }
`;

const activeClassName = "active";

export const NavbarLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.fontMuted};
    text-decoration: none;
    padding: 7px 14px;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.color.fontSecond};
        background: rgba(255,255,255,0.05);
    }

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.fontMain};
        background: ${({ theme }) => theme.color.accentGlow};
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
        display: none;
    }
`;

export const LinkImg = styled.img`
    display: none;
`;

export const LinkImgWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border: 1px solid ${({ theme }) => theme.color.borderMid};
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;
    background: transparent;

    &:hover {
        background: rgba(255,255,255,0.04);
        border-color: ${({ theme }) => theme.color.borderMid};
    }
`;

export const LinkImgSpan = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontMuted};

    ${LinkImgWrapper}:hover & {
        color: ${({ theme }) => theme.color.fontSecond};
    }
`;

export const LinkImgWrapperLang = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.2s;
    background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
    
    &:hover {
        opacity: 0.88;
        transform: translateY(-1px);
    }
`;

export const LinkImgWrapperLangSpan = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: #fff;
`;

export const PhoneNavbar = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
        display: none;
    }
`;
