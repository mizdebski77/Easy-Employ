import React from 'react';
import { BasicsInformation, InformationContainer, InformationSpan, InformationTitle, InformationsWrapper, Title, TitleSpan, SpanWrapper, Wrapper, DetailsWrapper, DetailsContainer, Map, MapWrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { OfferArray } from '../../../../core/interface';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import map from '../../../../common/Images/map.png';

export const Offer = () => {

    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['offer'],
        queryFn: () => fetch(`http://localhost:5000/offer/${id}`)
            .then((response: Response) => response.json())
    });

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <BasicsInformation>
                    <Title>
                        You are applying for the position:
                    </Title>
                    <TitleSpan>{data.position}</TitleSpan>

                    <InformationsWrapper>
                        <InformationContainer>
                            <SpanWrapper>
                                <InformationTitle>Gross salary</InformationTitle>
                                <InformationSpan>{data.gross_salary}</InformationSpan>
                            </SpanWrapper>
                        </InformationContainer>

                        <InformationContainer>
                            <SpanWrapper>
                                <InformationTitle>Type of work</InformationTitle>
                                <InformationSpan>{data.work_type}</InformationSpan>
                            </SpanWrapper>
                        </InformationContainer>

                        <InformationContainer>
                            <SpanWrapper>
                                <InformationTitle>Location</InformationTitle>
                                <InformationSpan>{data.location}</InformationSpan>
                            </SpanWrapper>
                        </InformationContainer>

                        <InformationContainer>
                            <SpanWrapper>
                                <InformationTitle>Company</InformationTitle>
                                <InformationSpan>{data.company_name}</InformationSpan>
                            </SpanWrapper>
                        </InformationContainer>
                    </InformationsWrapper>
                </BasicsInformation>
            )}


            <DetailsWrapper>
                <DetailsContainer>

                </DetailsContainer>
                <MapWrapper>
                    <Map src={map} alt='map' />
                </MapWrapper>
            </DetailsWrapper>
        </Wrapper>
    );
};

