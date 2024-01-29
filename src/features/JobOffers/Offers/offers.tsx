import React from 'react';
import { Wrapper } from '../styledJobOffers';
import { CaptionsContainer, ContentWrapper, Logo, MainSection, OfferCaptionTContent, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersTitle } from './styledOffers';
import logo from '../../../common/Images/logo.png';

export const Offers = () => {
    return (
        <Wrapper>
            <OffersTitle>Offers recommended for you </OffersTitle>
            <OfferTile to={`/${Offers}/${offer.id}`}>
                <MainSection>
                    <Logo src={logo} />
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                </MainSection>

                <ContentWrapper>
                    <CaptionsContainer>
                        <OfferCaptionWrapper>
                            <OfferCaptionTitle>Sallary:</OfferCaptionTitle>
                            <OfferCaptionTContent>10 000 - 12 000 zł / brutto</OfferCaptionTContent>
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

