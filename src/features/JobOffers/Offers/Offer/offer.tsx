import React from 'react';
import { InformationSpan, InformationTitle, InformationsWrapper, Title, TitleSpan, SpanWrapper, Wrapper, Details, DetailsContainer, Map, MapWrapper, DetailsSection, DetailTitle, TitleWrapper, TitleImg, BasicInformations, InfoWrapper, InfoImg, InfoTextWrapper, InfoSpanTitle, InfoSpan } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import map from '../../../../common/Images/map.png';
import { Informations } from './Infomations';

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

                    <InformationsWrapper >
                        {Informations.map((information, index) => (
                            <InfoWrapper key={index}>
                                <InfoImg src={information.src} />
                                <InfoTextWrapper>
                                    <InfoSpanTitle>{information.title}</InfoSpanTitle>
                                    <InfoSpan>{information.text}</InfoSpan>
                                </InfoTextWrapper>
                            </InfoWrapper>
                        ))}
                    </InformationsWrapper>

                </BasicInformations>




            )}
        </Wrapper>
    );
};

