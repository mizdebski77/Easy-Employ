import { Link } from "react-router-dom";
import { styled } from "styled-components";
import homeBg from '../../common/Images/homeScreenBG.jpg';

export const Wrapper = styled.section`
    background-image: url(${homeBg});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    padding: 80px 40px;
    display: grid;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px rgba(34, 38, 41, 0.7);
`;

export const Title = styled.h1`
    margin: 0px;
    font-size: 124px;
    text-align: center;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
`;

export const TitleFirstLetters = styled.span`
    -webkit-text-stroke:1px ${({ theme }) => theme.color.fontMain};
    -webkit-text-fill-color:transparent;
`;

export const TitleParagraph = styled.p`
    font-size: 80px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const ButtonLink = styled(Link)`
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;
    background: transparent;
    border-radius: 40px;
    font-size: 24px;
    padding: 16px 80px;
    margin: 0 auto;
    transition: 0.3s;
    border: 1px solid white;

    &:hover {
        transform: scale(1.01);
        box-shadow: 4px 0 10px white;
    };
`;