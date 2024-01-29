import React from 'react';
import { CaptionNumber, Captions, Wrapper, Title, TitleWrapper } from './styledHome';
import { OfferSection } from './OfferSection/offerSection';
import { CarrerSection } from './CarrerSection/carrerSection';
import { News } from './News/news';
import { AppSection } from './AppSection/appSection';

export const Home = () => {

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Easy Employ - Your Way to Find a Job</Title>
                <Captions>Find your dream job in IT among <CaptionNumber>20 000</CaptionNumber> offers</Captions>
            </TitleWrapper>
            <OfferSection />
            <CarrerSection />
            <News />
            <AppSection />
        </Wrapper>
    );
};

