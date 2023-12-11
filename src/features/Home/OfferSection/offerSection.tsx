import React from 'react';
import { Wrapper, OffersTitle, OfferWrapper, OfferTile, OfferTitle, OfferArticle, OfferLogo, OfferDetails, AllOffersButton } from './styledOfferSection';
import logo from '../../../common/Images/logo.png';

export const OfferSection = () => {
    return (
        <Wrapper>
            <OffersTitle>Offer zone</OffersTitle>

            <OfferWrapper>
                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferArticle>
                        <OfferLogo src={logo} />
                        <OfferDetails>Easy Employ</OfferDetails>
                    </OfferArticle>
                </OfferTile>

            </OfferWrapper>
            <AllOffersButton to='/Offers'>All offers</AllOffersButton>
        </Wrapper>
    );
};

