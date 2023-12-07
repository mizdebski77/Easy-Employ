import React from 'react';
import { CaptionNumber, Captions, Title, Wrapper } from './styledHome';

export const Home = () => {
    return (
        <Wrapper>
            <Title>Easy Employ - Your Way to Find a Job</Title>
            <Captions>Find your dream job in IT among <CaptionNumber>20 000</CaptionNumber>  offers
            </Captions>
        </Wrapper>
    );
};

