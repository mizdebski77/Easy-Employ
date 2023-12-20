import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.color.thirdColor};
    padding: 120px 40px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const MainSection = styled.section`

`;


export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap:10px;
    text-decoration: none;
`;

export const Logo = styled.img`
    max-width: 80px;
`;

export const LogoText = styled.span`
    font-size: 40px;
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

export const ToolsWrapper = styled.div`

`;

export const ToolsTitle = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    text-align: center;
    font-weight: normal;
`;

export const ToolsLinksWrapper = styled.div`
    display: grid;  
    justify-content: center;
    gap: 10px;
`;

export const ToolsLink = styled(Link)`
    color: ${({ theme }) => theme.color.fontSecond};
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.fontMain};
    };    
`;

export const AppWrapper = styled.div`

`;

export const IformationsWrapper = styled.section`

`;