import React from 'react';
import { BasicsInformations, Img, Logo, MainSection, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersContainer, OffersTitle, Span, TechStackSpan, TechStackWrapper, TextSection, Wrapper } from './styledOffers';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { FilterItem, OfferArray } from '../../../core/interface';
import { scrollTop } from '../../../core/scrollTop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import company from '../../../common/Images/company.svg';
import typeOfWork from '../../../common/Images/SVG/tof.svg';
import location from '../../../common/Images/SVG/location.svg';

export const Offers = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("https://esay-employ-database-wfsz.onrender.com/")
            .then((response: Response) => response.json())
    });

    const checkedFilters = useSelector((state: RootState) => state.filters.checkedFilters);
    const filtersList = checkedFilters.filter(item => item.checked);

    console.log(filtersList);


    return (
        <Wrapper>
            {data && (
                <OffersTitle>Offers recommended for you <Span>({data.length})</Span> </OffersTitle>
            )}

            {isLoading ? <Loader /> : error ? <Error /> : (
                <OffersContainer>
                    {data.map((offer: OfferArray) => (
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
                                            <Img src={company} alt='company' />
                                            <OfferCaptionTitle>{offer.company_name}</OfferCaptionTitle>
                                        </OfferCaptionWrapper>

                                        <OfferCaptionWrapper>
                                            <Img src={typeOfWork} alt='work type' />
                                            <OfferCaptionTitle>{offer.work_type}</OfferCaptionTitle>
                                        </OfferCaptionWrapper>

                                        <OfferCaptionWrapper>
                                            <Img src={location} alt='location' />
                                            <OfferCaptionTitle>{offer.location}</OfferCaptionTitle>
                                        </OfferCaptionWrapper>
                                    </BasicsInformations>
                                </TextSection>
                            </MainSection>
                            <TechStackWrapper >
                                {offer.skills.map((skill) => (
                                    <TechStackSpan key={skill.skill}>{skill.skill}</TechStackSpan>
                                ))}
                            </TechStackWrapper>
                        </OfferTile>
                    ))
                    }
                </OffersContainer>
            )}
        </Wrapper>
    );
};

