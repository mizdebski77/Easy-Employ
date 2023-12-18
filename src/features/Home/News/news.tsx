import React, { useState } from 'react';
import { CustomSwiper, ReadMore, Tile, TileArticle, TileContent, TileImage, TileTitle, TileWrapper, Title, Wrapper } from './styledNews';
import ex from '../../../common/Images/Carrer/CVCreator.jpg';
import { useQuery } from '@tanstack/react-query';
import { Article } from '../../../core/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const News = () => {


    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
            .then((response: Response) => response.json())
    });


    return (
        <Wrapper>
            <Title>The most important news from the business world in one place</Title>
            <TileWrapper>

                    <CustomSwiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                    >
                        {data.articles.map((article: Article, index: number) => (
                            <Tile key={index}>
                                <TileImage src={article.urlToImage} />
                                <TileContent>
                                    <TileTitle>{article.title}</TileTitle>
                                    <TileArticle>{article.content}</TileArticle>
                                    <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                                </TileContent>
                            </Tile>
                        ))}
                    </CustomSwiper>
            </TileWrapper>
        </Wrapper>
    );
};
