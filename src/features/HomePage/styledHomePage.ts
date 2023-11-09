import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: linear-gradient(103deg, #4E0086 0%, #23003D 46.6%, #36005E 100.99%);    
    min-height: 100vh;
    padding: 80px 40px;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    margin: 0px;
    font-size: 124px;
    text-align: center;
    color: ${({ theme }) => theme.color.mainColor};
    font-weight: normal;
`;

export const TitleFirstLetters = styled.span`
    -webkit-text-stroke:1px white;
    -webkit-text-fill-color:transparent;
`;

export const TitleParagraph = styled.p`
    font-size: 80px;
`;

export const ButtonLink = styled(Link)`
    color: ${({ theme }) => theme.color.mainColor};
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
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 0 10px white;
    }
`;