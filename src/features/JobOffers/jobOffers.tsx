import {
    CaptionsContainer,
    ContentWrapper,
    Logo,
    MainSection,
    OfferCaptionTContent,
    OfferCaptionTitle,
    OfferCaptionWrapper,
    OfferTile,
    OfferTitle,
    OffersContainer,
    OffersTitle,
    Title,
    Wrapper,

} from './styledJobOffers';
import logo from '../../common/Images/logo.png';
import { FormElement } from './FormElement/formElement';
import { Filters } from './Filters/filters';

export const JobOffers = () => {


    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>

            <FormElement />


            <OffersContainer>
                <Filters />

                <div>
                    <OffersTitle>Offers recommended for you </OffersTitle>
                    <OfferTile>
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
                </div>
            </OffersContainer>
        </Wrapper >
    );
};
