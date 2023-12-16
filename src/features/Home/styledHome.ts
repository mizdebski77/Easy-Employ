import { styled } from "styled-components";
import bg from '../../common/Images/header.jpg';

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`;

export const TitleWrapper = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
    
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

