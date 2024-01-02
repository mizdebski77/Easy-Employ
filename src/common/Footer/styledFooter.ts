import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.color.thirdColor};
    padding: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        padding: 20px;
    };
`;

export const MainSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 40px 10px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-direction: column;
        gap: 40px;
    };
`;

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap:10px;
    text-decoration: none;
`;

export const Logo = styled.img`
    max-width: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 40px;
    };
`;

export const LogoText = styled.span`
    font-size: 40px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const LogoFirstLetters = styled.span`
    -webkit-text-stroke:1px ${({ theme }) => theme.color.fontMain};
    -webkit-text-fill-color:transparent;
`;

export const ToolsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ToolsTitle = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        text-align: center;
    };
`;

export const ToolsLinksWrapper = styled.div`
    display: grid;  
    justify-content: center;
    gap: 10px;
`;

export const ToolsLink = styled(Link)`
    color: ${({ theme }) => theme.color.fontSecond};
    text-decoration: none;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.fontMain};
    };   
    
    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
        text-align: center;
    };
`;

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AppTitle = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        text-align: center;
    };
`;


export const AppImg = styled.img`
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
    };

    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 120px;
    };
`;


export const IformationsWrapper = styled.section`
    border-top: 1px solid ${({ theme }) => theme.color.fontSecond};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
      
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-direction: column;
        gap: 40px;
        padding: 20px 10px;
    };
`;

export const InformationsLinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    };
`;

export const InformationLink = styled.span`
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color:${({ theme }) => theme.color.fontMain}
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        text-align:center;
    };
`;

export const InformationAppWrapper = styled.div`
    display: flex;
    gap: 32px;

`;

export const SocialLink = styled.img`
    max-width: 56px;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 40px;
    };
`;

