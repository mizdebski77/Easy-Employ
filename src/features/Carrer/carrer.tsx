import React from 'react';
import { ButtonWrapper, ContentWrapper, EditButton, MainWrapper, Name, Photo, PhotoSection, Title, Wrapper } from './styledCarrer';
import profile from '../../common/Images/profileStack.png';

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

                </ContentWrapper>

                <ButtonWrapper>
                    <EditButton>✎ Edit</EditButton>

                </ButtonWrapper>
            </MainWrapper>
        </Wrapper>
    );
};

