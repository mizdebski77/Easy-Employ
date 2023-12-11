import React from 'react';
import {  ProfileImg, ProfileSpan, ProfileTitle, ProfileWrapper, TextWrapper, Title, Wrapper } from './styledCarrerSection';
import profile from '../../../common/Images/profile.png';

export const CarrerSection = () => {
    return (
        <Wrapper>
            <Title> My Carrer</Title>
            <ProfileWrapper>
                <ProfileImg src={profile} />

                <TextWrapper>
                    <ProfileTitle>My Profile</ProfileTitle>
                    <ProfileSpan>- simpler application</ProfileSpan>
                    <ProfileSpan>- faster access to recruitment documents</ProfileSpan>
                    <ProfileSpan>- automatic completion of questions from employers </ProfileSpan>
                </TextWrapper>

            </ProfileWrapper>
        </Wrapper>
    );
};
