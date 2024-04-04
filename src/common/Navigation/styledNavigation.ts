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
    background: ${({ theme }) => theme.color.secondColor};
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        padding: 20px;
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
        max-width: 32px;
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
    gap: 60px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        gap: 30px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

const activeClassName = "active";

export const NavbarLink = styled(NavLink)`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontSecond};
    text-decoration: none;
    transition: 0.3s;
    text-align: center;

    &:hover {
        color: ${({ theme }) => theme.color.fontMain};
        transform: translateY(-5px);
    };

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.fontMain};

        &:hover {
            transform: translateY(0px);
        };    
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

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

export const LinkImgWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;  
    transition: 0.3s;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 10px;
    text-decoration: none;
    
    &:hover {
        background: ${({ theme }) => theme.color.thirdColor};
    };
`;

export const LinkImgWrapperLang = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;  
    transition: 0.3s;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover {
        background: ${({ theme }) => theme.color.thirdColor};
    };
`;

export const LinkImgSpan = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: bold;


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
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    display: grid;
    gap: 40px;
`;

export const CoursesWrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    display: grid;
    gap: 40px;
`;

