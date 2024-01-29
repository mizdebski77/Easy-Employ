import React from 'react';
import { Wrapper, OffersTitle, OfferWrapper, OfferTile, OfferTitle, OfferArticle, OfferLogo, OfferDetails, AllOffersButton } from './styledOfferSection';
import logo from '../../../common/Images/logo.png';
import { scrollTop } from '../../../core/scrollTop';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { OfferArray } from '../../../core/interface';

export const OfferSection = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("http://localhost:5000/")
            .then((response: Response) => response.json())
    });

    return (
        <Wrapper>
            <OffersTitle>Offer zone</OffersTitle>

            {isLoading ? <Loader /> : error ? <Error /> : (
                <OfferWrapper>
                    {data.map((offer: OfferArray) => (
                        <OfferTile key={offer.id}>
                            <OfferTitle >{offer.position}</OfferTitle>
                            <OfferArticle>
                                <OfferLogo src={offer.logo} />
                                <OfferDetails>{offer.company_name}</OfferDetails>
                            </OfferArticle>
                        </OfferTile>
                    ))}
                </OfferWrapper>
            )}

            <AllOffersButton to='/Offers' onClick={() => scrollTop()}>All offers</AllOffersButton>
        </Wrapper>
    );
};