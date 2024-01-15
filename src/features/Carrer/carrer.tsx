import React from 'react';
import { ButtonWrapper, ContentWrapper, EditButton, LocationImg, LocationSpan, LocationWrapper, MainWrapper, Name, Photo, PhotoSection, Title, Wrapper } from './styledCarrer';
import profile from '../../common/Images/profileStack.png';
import location from '../../common/Images/location.png';

export const Carrer = () => {
    return (
        <Wrapper>
            <Title> My Career</Title>

            <MainWrapper>
                <PhotoSection>
                    <Photo src={profile} />
                </PhotoSection>

                <ContentWrapper>
                    <Name>Name & Surname </Name>

                    <LocationWrapper>
                        <LocationImg src={location} />
                        <LocationSpan> Olkusz, Małopolskie</LocationSpan>
                    </LocationWrapper>

                </ContentWrapper>

                <ButtonWrapper>
                    <EditButton>✎ Edit</EditButton>

                </ButtonWrapper>
            </MainWrapper>
        </Wrapper>
    );
};

