import React from 'react';
import { CaptionNumber, Captions, OfferArticle, OfferDetails, OfferLogo, OfferTile, OfferTitle, OfferWrapper, OffersTitle, OffersWrapper, Title, Wrapper } from './styledHome';
import logo from '../../common/Images/logo.png';

export const Home = () => {
    return (
        <Wrapper>
            <Title>Easy Employ - Your Way to Find a Job</Title>
            <Captions>Find your dream job in IT among <CaptionNumber>20 000</CaptionNumber> offers</Captions>

            <OffersWrapper>
                <OffersTitle>Offer zone</OffersTitle>

                <OfferWrapper>
                    <OfferTile>
                        <OfferTitle>Junior Frontend Developer</OfferTitle>
                        <OfferArticle>
                            <OfferLogo src={logo} />
                            <OfferDetails>Easy Employ</OfferDetails>
                        </OfferArticle>
                    
                    </OfferTile>

                </OfferWrapper>
            </OffersWrapper>
        </Wrapper>
    );
};

