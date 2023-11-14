import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav <{ homeScreen?: boolean }>`
    padding: 20px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 20px ${({ theme }) => theme.color.fontMain};
    position: sticky;
    z-index: 10; 

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        padding: 20px 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px 12px;
        box-shadow: none;
    };
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        gap: 10px;
    };
`;

export const LogoImg = styled.img`
    max-width: 64px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 40px;
    }
`;

export const LogoText = styled.span`
    font-size: 32px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const LogoFirstLetters = styled.span`
    -webkit-text-stroke:1px ${({ theme }) => theme.color.fontMain};
    -webkit-text-fill-color:transparent;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        gap: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
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

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        gap: 20px;
    };    
`;

export const LinkImg = styled.img`
    width: 56px;
    height: 56px;
    padding: 6px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

export const PhoneNavbar = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

