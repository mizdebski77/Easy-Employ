import React from 'react';
import { Map, MapWrapper, TilesWrapper, Wrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import { BasicInfo } from './BasicInformations/basicsInfo';
import { Details } from './DetailsSection/details';
import map from '../../../../common/Images/map.png';
import { Apply } from './Apply/apply';

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
                    <div>
                        <TilesWrapper>
                            <BasicInfo data={data} />
                            <Details data={data} />
                        </TilesWrapper>
                    </div>

                    <div>
                        <MapWrapper>
                            <Map src={map} />
                        </MapWrapper>
                    </div>

                    <Apply />
                </>
            )}
        </Wrapper>
    );
};

