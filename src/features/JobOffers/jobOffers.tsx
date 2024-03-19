import {
    OffersContainer,
    Title,
    Wrapper,

} from './styledJobOffers';
import { FormElement } from './FormElement/formElement';
import { Filters } from './Filters/filters';
import { Offers } from './Offers/offers';

export const JobOffers = () => {

    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>
            <FormElement />
            <OffersContainer>
                <Filters />
                <Offers />
            </OffersContainer>
        </Wrapper >
    );
};
