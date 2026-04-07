import { Captions, ContentWrapper, DownloadInformation, ImagesWrapper, MobileImg, SectionLabel, StoreIcon, StoresIconsWrapper, Title, Wrapper } from './styledAppSection';
import appStore from '../../../common/Images/Home/app.png';
import googlePlay from '../../../common/Images/Home/google.png';
import smartphone from '../../../common/Images/Home/smartphone.png';
import { captions } from '../../../core/arrays';

export const AppSection = () => {
    return (
        <Wrapper>
            <ImagesWrapper>
                <MobileImg src={smartphone} alt="Mobile app" />
            </ImagesWrapper>
            <ContentWrapper>
                <SectionLabel>Mobile app</SectionLabel>
                <Title>Your career in your pocket</Title>
                {captions.map((text) => (
                    <Captions key={text}>{text}</Captions>
                ))}
                <DownloadInformation>Available on iOS and Android</DownloadInformation>
                <StoresIconsWrapper>
                    <StoreIcon src={appStore} alt="App Store" />
                    <StoreIcon src={googlePlay} alt="Google Play" />
                </StoresIconsWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};
