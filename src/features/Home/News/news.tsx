import React from 'react';
import { ReadMore, Tile, TileArticle, TileContent, TileImage, TileTitle, TileWrapper, Title, Wrapper } from './styledNews';
import ex from '../../../common/Images/Carrer/CVCreator.jpg';
import { useQuery } from '@tanstack/react-query';

export const News = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
            .then((response: Response) => response.json())
    });

        console.log(data);




    return (
        <Wrapper>
            <Title>The most important news from the business world in one place</Title>
            <TileWrapper>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

                <Tile>
                    <TileImage src={ex} />
                    <TileContent>
                        <TileTitle>News one two three</TileTitle>
                        <TileArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis dolor dolore facere ullam tempore, beatae vel iste eum pariatur temporibus qui eos magnam eaque aspernatur porro, neque quidem cupiditate.</TileArticle>
                        <ReadMore to='/Article'> Read more 🡢 </ReadMore>
                    </TileContent>
                </Tile>

            </TileWrapper>
        </Wrapper>
    );
};

