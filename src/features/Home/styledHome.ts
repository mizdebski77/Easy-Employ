import { styled } from "styled-components";
import bg from '../../common/Images/Home/header.jpg';

export const Wrapper = styled.section`
    margin: 0 auto;
`;

export const TitleWrapper = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 100px 0px 175.8px 27px #f1f1f0 inset;
    border-radius: 0 0 160px 160px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        border-radius: 0 0 40px 40px;
        min-height: 200px;
        padding: 10px;
    };
`;

export const Title = styled.h1`
    font-size: 88px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
    margin: 40px 0 20px 0;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
    };
`;

export const Captions = styled.h2`
    font-size: 40px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        margin: 0;
    };
`;

export const CaptionNumber = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.color.fontMain};
`;

