import React from 'react';
import { Captions, DownloadInformation, ImagesWrapper, TextWrapper, Title, Wrapper } from './styledAppSection';

export const AppSection = () => {
    return (
        <Wrapper>
            <ImagesWrapper>

            </ImagesWrapper>

            <TextWrapper>
                <Title>Mobile application on your phone</Title>
                <Captions>- Notifications about recruitment progress </Captions>
                <Captions>- Latest job offers </Captions>
                <Captions>- Efficient contact with the employer </Captions>
                <DownloadInformation>The application is available in all available mobile stores</DownloadInformation>
            </TextWrapper>
        </Wrapper>
    );
};

