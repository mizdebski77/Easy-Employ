import { OffersContainer, Title, Wrapper } from './styledJobOffers';
import { Filters } from './Filters/filters';
import { Offers } from './Offers/offers';

export const JobOffers = () => {
    return (
        <Wrapper>
            <Title>Find your next role</Title>
            <OffersContainer>
                <Filters />
                <Offers />
            </OffersContainer>
        </Wrapper>
    );
};
