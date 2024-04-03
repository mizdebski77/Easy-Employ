import React from 'react';
import { Captions, DownloadInformation, ImagesWrapper, MobileImg, StoreIcon, StoresIconsWrapper, Title, Wrapper } from './styledAppSection';
import appStore from '../../../common/Images/Home/app.png';
import googlePlay from '../../../common/Images/Home/google.png';
import smartphone from '../../../common/Images/Home/smartphone.png';

export const AppSection = () => {

    const captions = [
        'Notifications about recruitment progress',
        'Latest job offers',
        'Efficient contact with the employer'
    ]
    return (
        <Wrapper>
            <ImagesWrapper>
                <MobileImg src={smartphone} />
            </ImagesWrapper>

            <div>
                <Title>Mobile application on your phone</Title>
                {captions.map((text) => (
                    <Captions key={text}> - {text} </Captions>
                ))}
                <DownloadInformation>The application is available in all available mobile stores</DownloadInformation>

                <StoresIconsWrapper>
                    <StoreIcon src={appStore} />
                    <StoreIcon src={googlePlay} />
                </StoresIconsWrapper>
            </div>
        </Wrapper>
    );
};

