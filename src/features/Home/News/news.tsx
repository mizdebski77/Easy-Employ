import React from 'react';
import { ReadMore, Tile, TileArticle, TileContent, TileImage, TileTitle, TileWrapper, Title, Wrapper } from './styledNews';
import ex from '../../../common/Images/Carrer/CVCreator.jpg';
import { useQuery } from '@tanstack/react-query';
import { Article } from '../../../core/interface';

export const News = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
            .then((response: Response) => response.json())
    });

    console.log(data?.articles);

    return (
        <Wrapper>
            <Title>The most important news from the business world in one place</Title>
            <TileWrapper>
                {isLoading ? <div>Czekaj!</div> : (
                    data?.articles.map((article: Article) => (
                        <Tile key={article.title}>
                            <TileImage src={ex} />
                            <TileContent>
                                <TileTitle>{article.title}</TileTitle>
                                <TileArticle>{article.content}</TileArticle>
                                <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                            </TileContent>
                        </Tile>
                    ))
                )}
            </TileWrapper>
        </Wrapper>
    );
};
