import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav <{ homeScreen?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 54px;
    position: sticky;
    z-index: 10; 
    top:0;
    background: ${({ theme }) => theme.color.mainColor};
    transition: 0.3s;
    box-shadow: inset 0 -10px 10px -10px ${({ theme }) => theme.color.fontMain};

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
    text-align: center;

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

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

export const LinkImgWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;  
    transition: 0.3s;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 10px;
    width: 166px;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    };
`;

export const LinkImgSpan = styled.span`
    color: white;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

export const PhoneNavbar = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

export const LanguagesWrapper = styled.div`
    height: 200px;
    background: white;
    position:fixed;
    top: 40px;
`;

