import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.fontMain};
    background: #474B4F;
    position: fixed;
    width: 100%;
    z-index: 1;
    padding: 40px 20px ; 
    display: grid;
    gap: 40px;
    text-align: center;
    box-shadow: inset 0 -10px 10px -10px ${({ theme }) => theme.color.fontMain};
    
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        display: none;
    };
`;

export const NavbarLink = styled(NavLink)`
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.fontMain};
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 60%;
    width: 100%;
    margin: 0 auto;
`;

export const LinkImg = styled.img`
    width: 40px;
    height: 40px;
`;


