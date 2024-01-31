import React from 'react';
import {  InformationSpan, InformationTitle, InformationsWrapper, Title, TitleSpan, SpanWrapper, Wrapper, Details, DetailsContainer, Map, MapWrapper, DetailsSection, DetailTitle, TitleWrapper, TitleImg, BasicInformations, InfoWrapper, InfoImg } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
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
                <BasicInformations>
                    <TitleWrapper>
                        <TitleImg src={data.logo} alt='logo' />
                        <div>
                            <Title>{data.position}</Title>
                            <TitleSpan>{data.company_name}</TitleSpan>
                        </div>
                    </TitleWrapper>

                    {/* <InformationsWrapper>
                        <InfoWrapper>
                            <InfoImg src
                        </InfoWrapper>
                    </InformationsWrapper>
                </BasicInformations> */}

            )}


            {/* <Details>
                <DetailsContainer>
                    <DetailsSection>
                        <DetailTitle>
                            Tech stack
                        </DetailTitle>
                    </DetailsSection>

                </DetailsContainer>
                <MapWrapper>
                    <Map src={map} alt='map' />
                </MapWrapper>
            </Details> */}
        </Wrapper>
    );
};

