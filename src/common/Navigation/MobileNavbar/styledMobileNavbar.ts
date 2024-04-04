import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    border-bottom: 1px  solid ${({ theme }) => theme.color.fontMain};
    background: ${({ theme }) => theme.color.secondColor};
    opacity: 0.98;
    border-top: 1px solid ${({ theme }) => theme.color.fontMain};
    position: fixed;
    width: 100%;
    z-index: 1;
    padding:20px ; 
    display: grid;
    gap: 40px;
    text-align: center;
    
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

const activeClassName = "active";


export const NavbarLink = styled(NavLink)`
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontSecond};
    text-decoration: none;
    padding-bottom: 20px;
    width: 70%;
    margin: 0 auto;

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.fontMain};
        border-bottom: 1px solid ${({ theme }) => theme.color.fontMain};;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 60%;
    width: 100%;
    margin: 0 auto;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
`;

export const LinkImg = styled(Link)`

`;


