import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 20px;
    margin-top: 120px;
    border-radius: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 54px;
    color: white;
    font-weight: normal;
    margin-bottom: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
        margin: 20px 0;
    };
`;

export const ContentWrapper = styled.div`
    display: flex;
    gap: 40px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        gap: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        flex-direction: column;
        justify-content: center;
    };
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    background: white;
    padding: 20px 80px ;
    border-radius: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        padding: 20px 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-direction: column;
    };
    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        gap: 20px;
    };
`;

export const TextWrapper = styled.div`
    padding-left: 440px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        padding-left: 0;
    };
`;

export const ProfileTitle = styled.h2`
    font-size: 40px;
    color: ${({ theme }) => theme.color.fontMain};;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        text-align: center;
        font-size:28px;
        margin:0;
    };
`;

export const ProfileSpan = styled.p`
    color: ${({ theme }) => theme.color.fontMain};;
`;

export const ProfileImg = styled.img`
    position: absolute;
    top: -80px; 
    left: 0;
    max-width: 400px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        position: static;
        max-width: 280px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        margin: 0 auto;
        max-width: 200px;
    };
`;

export const ProfileLink = styled(Link)`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 12px 48px;
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    font-size: 18px;
    border-radius: 20px;
    transition:0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };


    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px){
        padding: 12px 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };

`;

export const TilesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 40px;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        grid-template-columns:  1fr 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns:  1fr;
    };
`;

export const CarrerTile = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 10px white;
`;

export const CarrerImg = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const TextContainer = styled.div`
    padding: 20px;
`;

export const TileTitle = styled.h3`
    font-size: 28px;
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: normal;
    color:${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const TileSpan = styled.span`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };    
`;

export const TileLink = styled(Link)`
    float: right;
    margin: 0 20px 20px 0;
    background: ${({ theme }) => theme.color.fontMain};
    padding: 8px 20px;
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 4px ${({ theme }) => theme.color.fontMain};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;