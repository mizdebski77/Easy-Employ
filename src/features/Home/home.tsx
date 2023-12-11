import React from 'react';
import { CaptionNumber, Captions, Wrapper, Title } from './styledHome';
import logo from '../../common/Images/logo.png';
import { OfferSection } from './OfferSection/offerSection';

export const Home = () => {
    return (
        <Wrapper>
            <Title>Easy Employ - Your Way to Find a Job</Title>
            <Captions>Find your dream job in IT among <CaptionNumber>20 000</CaptionNumber> offers</Captions>
            <OfferSection />
        </Wrapper>
    );
};

