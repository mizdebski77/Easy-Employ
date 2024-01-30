import React from 'react';
import { Wrapper } from '../styledJobOffers';
import { CaptionsContainer, ContentWrapper, Logo, MainSection, OfferCaptionTContent, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersTitle } from './styledOffers';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { OfferArray } from '../../../core/interface';
import { scrollTop } from '../../../core/scrollTop';

export const Offers = () => {


    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("http://localhost:5000/")
            .then((response: Response) => response.json())
    });

    return (
        <Wrapper>
            <OffersTitle>Offers recommended for you </OffersTitle>

            {isLoading ? <Loader /> : error ? <Error /> : (

                (data.map((offer: OfferArray) => (

                    <OfferTile to={`/Offer/${offer.id}`} key={offer.id} onClick={() => scrollTop()}>
                        <MainSection>
                            <Logo src={offer.logo} />
                            <OfferTitle>{offer.position}</OfferTitle>
                        </MainSection>

                        <ContentWrapper>
                            <CaptionsContainer>
                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Gross Sallary:</OfferCaptionTitle>
                                    <OfferCaptionTContent>{offer.gross_salary}</OfferCaptionTContent>
                                </OfferCaptionWrapper>

                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Location:</OfferCaptionTitle>
                                    <OfferCaptionTContent>{offer.location}</OfferCaptionTContent>
                                </OfferCaptionWrapper>

                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Type of work:</OfferCaptionTitle>
                                    <OfferCaptionTContent>{offer.work_type}</OfferCaptionTContent>
                                </OfferCaptionWrapper>
                            </CaptionsContainer>

                        </ContentWrapper>

                    </OfferTile>
                ))
                )
            )}
        </Wrapper>
    );
};

