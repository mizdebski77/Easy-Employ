import React from 'react';
import { BasicsInformations, Img, Logo, MainSection, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersContainer, OffersTitle, TextSection, Wrapper } from './styledOffers';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { OfferArray } from '../../../core/interface';
import { scrollTop } from '../../../core/scrollTop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import company from '../../../common/Images/company.svg';
import typeOfWork from '../../../common/Images/SVG/tof.svg';
import { TilesWrapper } from './Offer/styledOffer';


export const Offers = () => {

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
                <OffersContainer>
                    {data.filter((offer: OfferArray) => (filtersApplied ? isOfferMatchingFilters(offer) : true))
                        .map((offer: OfferArray) => (
                            <OfferTile
                                to={`/Offer/${offer.id}`}
                                key={offer.id}
                                onClick={() => scrollTop()}
                            >

                                <MainSection>
                                    <Logo src={offer.logo} alt='logo' />
                                    <TextSection>
                                        <OfferTitle>{offer.position}</OfferTitle>
                                        <BasicsInformations>
                                            <OfferCaptionWrapper>
                                                <Img src={company} />
                                                <OfferCaptionTitle>{offer.company_name}</OfferCaptionTitle>
                                            </OfferCaptionWrapper>

                                            <OfferCaptionWrapper>
                                                <Img src={typeOfWork} />
                                                <OfferCaptionTitle>{offer.work_type}</OfferCaptionTitle>
                                            </OfferCaptionWrapper>
                                        </BasicsInformations>
                                    </TextSection>
                                </MainSection>
                            </OfferTile>
                        ))
                    }
                </OffersContainer>
            )}
        </Wrapper>
    );
};

