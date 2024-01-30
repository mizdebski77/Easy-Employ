import React from 'react';
import { BasicsInformation, CompanyName, JobTitle, JobTitleSpan, Wrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { OfferArray } from '../../../../core/interface';
import { useParams } from 'react-router-dom';

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
            <BasicsInformation>
                <JobTitle>
                    You are applying for the position: 
                    <JobTitleSpan>{data.position}</JobTitleSpan>
                </JobTitle>
                <CompanyName></CompanyName>

            </BasicsInformation>

        </Wrapper>
    );
};

