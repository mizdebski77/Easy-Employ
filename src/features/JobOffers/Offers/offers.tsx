import React from 'react';
import { Wrapper } from '../styledJobOffers';
import { CaptionsContainer, ContentWrapper, Logo, MainSection, OfferCaptionTContent, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersTitle } from './styledOffers';
import logo from '../../../common/Images/logo.png';

export const Offers = () => {
    return (
        <Wrapper>
            <OffersTitle>Offers recommended for you </OffersTitle>
            <OfferTile to={`/Offer`}>
                <MainSection>
                    <Logo src={logo} />
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                </MainSection>

                <ContentWrapper>
                    <CaptionsContainer>
                        <OfferCaptionWrapper>
                            <OfferCaptionTitle>Gross Sallary:</OfferCaptionTitle>
                            <OfferCaptionTContent>10 000 - 12 000 zł</OfferCaptionTContent>
                        </OfferCaptionWrapper>

                        <OfferCaptionWrapper>
                            <OfferCaptionTitle>Location:</OfferCaptionTitle>
                            <OfferCaptionTContent>Warsaw / Poland</OfferCaptionTContent>
                        </OfferCaptionWrapper>

                        <OfferCaptionWrapper>
                            <OfferCaptionTitle>Type of work:</OfferCaptionTitle>
                            <OfferCaptionTContent>Remote work</OfferCaptionTContent>
                        </OfferCaptionWrapper>
                    </CaptionsContainer>

                </ContentWrapper>

            </OfferTile>
        </Wrapper>
    );
};

