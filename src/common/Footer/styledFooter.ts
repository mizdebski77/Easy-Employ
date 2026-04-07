import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
    padding: 40px 54px;
    margin-top: 80px;
    background: ${({ theme }) => theme.color.bgCard};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 32px 20px;
    }
`;

export const MainSection = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 60px;
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        grid-template-columns: 1fr;
        gap: 28px;
    }
`;

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
`;

export const Logo = styled.img`
    display: none;
`;

export const LogoDot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.fontMain};
`;

export const LogoText = styled.span`
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const LogoFirstLetters = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
`;

export const LogoTagline = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
    margin-top: 8px;
    line-height: 1.5;
    max-width: 240px;
`;

export const ToolsWrapper = styled.div``;

export const ToolsTitle = styled.h4`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-bottom: 14px;
    font-weight: 500;
`;

export const ToolsLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ToolsLink = styled(Link)`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
    text-decoration: none;
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.color.fontMain};
    }
`;

export const AppWrapper = styled.div``;

export const AppTitle = styled.h4`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-bottom: 14px;
    font-weight: 500;
`;

export const AppImg = styled.img`
    height: 36px;
    opacity: 0.5;
    display: block;
    margin-bottom: 8px;
    filter: brightness(2) grayscale(0.3);
`;

export const IformationsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`;

export const InformationsLinksWrapper = styled.div``;

export const InformationLink = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontSubtle};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.color.fontMuted};
    }
`;

export const InformationAppWrapper = styled.div`
    margin-left: auto;
    display: flex;
    gap: 12px;
`;

export const SocialLink = styled.img`
    width: 22px;
    height: 22px;
    opacity: 0.4;
    cursor: pointer;
    transition: 0.2s;
    filter: brightness(3) grayscale(0.5);

    &:hover { opacity: 0.8; }
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontSubtle};
    margin-left: auto;
`;
