import React from 'react';
import { Wrapper } from '../styledJobOffers';
import { CaptionsContainer, ContentWrapper, Logo, MainSection, OfferCaptionTContent, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersTitle } from './styledOffers';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { OfferArray } from '../../../core/interface';
import { scrollTop } from '../../../core/scrollTop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store';

export const Offers = () => {

    const captions = [
        {
            title: 'Gross Sallary:',
            text: 'gross_salary'
        },
        {
            title: 'Location:',
            text: 'location'
        },
        {
            title: 'Type of work:',
            text: 'work_type'
        }
    ]

    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("https://esay-employ-database-wfsz.onrender.com/")
            .then((response: Response) => response.json())
    });

    const checkedFilters = useSelector((state: RootState) => state.filters.checkedFilters);
    const filtersList = checkedFilters.filter(item => item.checked);

    const isOfferMatchingFilters = (offer: OfferArray): boolean => {
        return filtersList.some(filter => offer.keywords.includes(filter.text));
    };

    const filtersApplied = filtersList.length > 0;

    return (
        <Wrapper>
            <OffersTitle>Offers recommended for you </OffersTitle>
            {isLoading ? <Loader /> : error ? <Error /> : (
                (data
                    .filter((offer: OfferArray) => (filtersApplied ? isOfferMatchingFilters(offer) : true))
                    .map((offer: OfferArray) => (
                        <OfferTile
                            to={`/Offer/${offer.id}`}
                            key={offer.id}
                            onClick={() => scrollTop()}
                        >
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
                ))}
        </Wrapper>
    );
};

