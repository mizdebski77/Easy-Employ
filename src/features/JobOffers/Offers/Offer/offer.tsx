import { ContentWrapper, Map, MapWrapper, TilesWrapper, Wrapper } from './styledOffer';
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
        queryFn: () => fetch(`https://esay-employ-database-wfsz.onrender.com/Offer/${id}`)
            .then((response: Response) => response.json())
    });

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <ContentWrapper>
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
                </ContentWrapper>
            )}
        </Wrapper>
    );
};

