import React from 'react';
import { Wrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import money from '../../../../common/Images/SVG/money.svg';
import location from '../../../../common/Images/SVG/location.svg';
import tof from '../../../../common/Images/SVG/tof.svg';
import { BasicInfo } from './BasicInformations/basicsInfo';
import { Details } from './DetailsSection/details';

export const Offer = () => {

    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['offer'],
        queryFn: () => fetch(`http://localhost:5000/offer/${id}`)
            .then((response: Response) => response.json())
    });

    if (!data) {
        return null;
    }

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <>
                    <BasicInfo data={data} />
                    <Details />
                </>
            )}
        </Wrapper>
    );
};

