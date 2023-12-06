import { Link } from "react-router-dom";
import { styled } from "styled-components";
import homeBg from '../../common/Images/homeScreenBG.jpg';

export const Wrapper = styled.section`
    background-image: url(${homeBg});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px rgba(34, 38, 41, 0.7);

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 80px 20px;
    };
`;

export const Title = styled.h1`
    margin: 0px;
    font-size: 124px;
    text-align: center;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 80px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 40px;
    };
`;

export const TitleFirstLetters = styled.span`
    -webkit-text-stroke:1px ${({ theme }) => theme.color.fontMain};
    -webkit-text-fill-color:transparent;
`;

export const TitleParagraph = styled.p`
    font-size: 80px;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 64px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const ButtonContainer = styled.div`

`;

export const ButtonLink = styled(Link)`
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    background: ${({ theme }) => theme.color.fontMain};
    border-radius: 12px;
    font-size: 24px;
    padding: 16px 80px;
    margin: 0 auto;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 10px 20px;
        font-size: 16px;
    };

    &:hover {
        background: rgba(0, 150, 255, 0.7)
    };

    &:active {
        background: rgba(0, 150, 255, 0.5)
    };
`;