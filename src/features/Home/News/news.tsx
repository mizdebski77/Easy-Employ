import React from 'react';
import { ReadMore, Tile, TileArticle, TileContent, TileImage, TileTitle, TileWrapper, Title, Wrapper } from './styledNews';
import ex from '../../../common/Images/Carrer/CVCreator.jpg';

export const News = () => {
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

