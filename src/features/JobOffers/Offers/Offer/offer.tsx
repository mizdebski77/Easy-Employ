import React from 'react';
import { BasicsInformation, CompanyName, InformationContainer, InformationSpan, InformationTitle, InformationsWrapper, JobTitle, JobTitleSpan, Wrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { OfferArray } from '../../../../core/interface';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';

export const Offer = () => {

    const { id } = useParams();

    console.log(id);


    const { data, isLoading, error } = useQuery({
        queryKey: ['offer'],
        queryFn: () => fetch(`http://localhost:5000/offer/${id}`)
            .then((response: Response) => response.json())
    });

    console.log(data, id);


    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (

                <BasicsInformation>
                    <JobTitle>
                        You are applying for the position:
                        <JobTitleSpan>{data.position}</JobTitleSpan>
                    </JobTitle>
                    <InformationsWrapper>
                        <InformationContainer>
                            <InformationTitle>Gross salary</InformationTitle>
                            <InformationSpan>{data.gross_salary}</InformationSpan>
                        </InformationContainer>

                        <InformationContainer>
                            <InformationTitle>Type of work</InformationTitle>
                            <InformationSpan>{data.work_type}</InformationSpan>
                        </InformationContainer>

                        <InformationContainer>
                            <InformationTitle>Location</InformationTitle>
                            <InformationSpan>{data.location}</InformationSpan>
                        </InformationContainer>

                        <InformationContainer>
                            <InformationTitle>Company</InformationTitle>
                            <InformationSpan>{data.company_name}</InformationSpan>
                        </InformationContainer>
                    </InformationsWrapper>

                </BasicsInformation>
            )};
        </Wrapper>


    );
};

