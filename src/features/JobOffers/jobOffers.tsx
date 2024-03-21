import {
    OffersContainer,
    Title,
    Wrapper,

} from './styledJobOffers';
import { Filters } from './Filters/filters';
import { Offers } from './Offers/offers';
import { KeyWords } from './KeyWords/keyWords';

export const JobOffers = () => {

    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>
            <KeyWords />
            <OffersContainer>
                <Filters />
                <Offers />
            </OffersContainer>
        </Wrapper >
    );
};
