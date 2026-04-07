import { BackButton, ContentWrapper, TilesWrapper, Wrapper } from './styledOffer';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import { BasicInfo } from './BasicInformations/basicsInfo';
import { Details } from './DetailsSection/details';
import { Apply } from './Apply/apply';

export const Offer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ['offer', id],
        queryFn: () => fetch(`https://esay-employ-database-wfsz.onrender.com/Offer/${id}`)
            .then((res: Response) => res.json())
    });

    return (
        <Wrapper>
            <BackButton onClick={() => navigate(-1)}>← Back to offers</BackButton>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <ContentWrapper>
                    <TilesWrapper>
                        <div>
                            <BasicInfo data={data} />
                            <Details data={data} />
                        </div>
                        <Apply />
                    </TilesWrapper>
                </ContentWrapper>
            )}
        </Wrapper>
    );
};
