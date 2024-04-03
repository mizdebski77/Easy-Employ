import React from 'react';
import { CaptionNumber, Captions, Wrapper, Title, TitleWrapper } from './styledHome';
import { OfferSection } from './OfferSection/offerSection';
import { CarrerSection } from './CarrerSection/carrerSection';
import { AppSection } from './AppSection/appSection';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';

export const Home = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("https://esay-employ-database-wfsz.onrender.com")
            .then((response: Response) => response.json())
    });


    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <div>
                    <TitleWrapper>
                        <Title>Easy Employ - Your Way to Find a Job</Title>
                        <Captions>Find your dream job in IT among <CaptionNumber>{data.length}</CaptionNumber> offers</Captions>
                    </TitleWrapper>

                    <OfferSection data={data} />
                    <CarrerSection />
                    <AppSection />
                </div>
            )}
        </Wrapper>
    );
};

