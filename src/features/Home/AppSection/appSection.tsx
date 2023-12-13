import React from 'react';
import { Captions, DownloadInformation, ImagesWrapper, StoreIcon, StoresIconsWrapper, TextWrapper, Title, Wrapper } from './styledAppSection';
import appStore from '../../../common/Images/Stores/app.png';
import googlePlay from '../../../common/Images/Stores/google.png';

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

                <StoresIconsWrapper>
                    <StoreIcon src={appStore} />
                    <StoreIcon src={googlePlay} />
                </StoresIconsWrapper>
            </TextWrapper>
        </Wrapper>
    );
};

