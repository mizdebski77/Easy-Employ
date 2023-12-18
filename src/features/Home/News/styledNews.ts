import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
    margin-top: 80px;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
    };
`;

export const CustomSwiper = styled(Swiper)`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    .swiper-button-next {
      color: ${({ theme }) => theme.color.fontMain};
      margin-left: 20px;
    }

    .swiper-button-prev {
      color: ${({ theme }) => theme.color.fontMain};
    }
`;

export const TilesWrapper = styled.div`
    padding: 40px;
`;

export const Tile = styled(SwiperSlide)`
    background: ${({ theme }) => theme.color.thirdColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        &:hover {
            box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
        };   
    };
`;

export const TileImage = styled.img`
    max-width: 600px;
    max-height:240px;
    width: 100%;
    border-radius: 20px 20px 0 0;
`;

export const TileContent = styled.div`
    padding: 20px;
`;

export const TileTitle = styled.h2`
    font-size: 32px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 28px;
        margin: 20px 0;
    };
`;

export const TileArticle = styled.article`
    font-size: 20px;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const ReadMore = styled(Link)`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 18px;
    text-decoration: none;
    float: right;
    padding: 20px 0 20px 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;