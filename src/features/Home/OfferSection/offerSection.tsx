import React from 'react';
import { Wrapper, OffersTitle, OfferWrapper, OfferTile, OfferTitle, OfferArticle, OfferLogo, OfferDetails, AllOffersButton } from './styledOfferSection';
import { scrollTop } from '../../../core/scrollTop';
import { OfferArray } from '../../../core/interface';

interface OfferSectionProps {
    data: OfferArray[];
}
export const OfferSection: React.FC<OfferSectionProps> = ({ data }) => {

    return (
        <Wrapper>
            <OffersTitle>Offer zone</OffersTitle>
            <OfferWrapper>
                {data.map((offer: OfferArray) => (
                    <OfferTile to={`/Offer/${offer.id}`} key={offer.id} onClick={() => scrollTop()} >
                        <OfferLogo src={offer.logo} />
                        <OfferArticle>
                            <OfferTitle >{offer.position}</OfferTitle>
                            <OfferDetails>{offer.company_name}</OfferDetails>
                        </OfferArticle>
                    </OfferTile>
                ))}
            </OfferWrapper>
            <AllOffersButton to='/Offers' onClick={() => scrollTop()}>All offers</AllOffersButton>
        </Wrapper>
    );
};