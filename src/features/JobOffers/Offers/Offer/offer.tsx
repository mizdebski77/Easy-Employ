import React from 'react';
import {
    Wrapper,
} from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import map from '../../../../common/Images/map.png';
import money from '../../../../common/Images/SVG/money.svg';
import location from '../../../../common/Images/SVG/location.svg';
import tof from '../../../../common/Images/SVG/tof.svg';
import { BasicInfo } from './BasicInformations/basicsInfo';

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

    const Informations = [
        { text: `${data.gross_salary}`, src: money, title: 'Gross Sallary' },
        { text: `${data.location}`, src: location, title: 'Location' },
        { text: `${data.work_type}`, src: tof, title: 'Type Of Work' },
    ];

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <>
                    <BasicInfo data={data} />
{/* 
                    <DetailsContainer>
                        <div>
                            <InformationTile>
                                <SectionTitle>Tech stack</SectionTitle>

                            </InformationTile>
                        </div>

                        <MapWrapper>
                            <Map src={map} />
                        </MapWrapper>

                    </DetailsContainer> */}
                </>
            )}
        </Wrapper>
    );
};

