import React, { useState } from 'react';
import { ReadMore, Tile, TileArticle, TileContent, TileImage, TileTitle, TileWrapper, Title, Wrapper } from './styledNews';
import ex from '../../../common/Images/Carrer/CVCreator.jpg';
import { useQuery } from '@tanstack/react-query';
import { Article } from '../../../core/interface';

export const News = () => {

    const [displayNews, setDisplayNews] = useState(3);

    const handleShowMore = () => {
        setDisplayNews(displayNews + 3);
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
            .then((response: Response) => response.json())
    });

    console.log(data?.articles);

    return (
        <Wrapper>
            <Title>The most important news from the business world in one place</Title>
            <TileWrapper>
                {isLoading ? <div>Czekaj!</div> : (
                    data.articles
                        .filter((article: Article, index: number) => article.urlToImage && index < displayNews)
                        .map((article: Article, index: number) => (
                            <Tile key={index}>
                                <TileImage src={article.urlToImage} />
                                <TileContent>
                                    <TileTitle>{article.title}</TileTitle>
                                    <TileArticle>{article.content}</TileArticle>
                                    <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                                </TileContent>
                            </Tile>
                        ))
                )}
            </TileWrapper>
            {displayNews < data?.articles.length && (
                <button onClick={handleShowMore}>Show more</button>
            )}
        </Wrapper>
    );
};
