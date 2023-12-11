import React from 'react';
import { CarrerImg, CarrerTile, ContentWrapper, ProfileImg, ProfileLink, ProfileSpan, ProfileTitle, ProfileWrapper, TextContainer, TextWrapper, TileSpan, TileTitle, TilesWrapper, Title, Wrapper } from './styledCarrerSection';
import profile from '../../../common/Images/profile.png';
import calculator from '../../../common/Images/Carrer/sallarycalculaor.jpg';
import offers from '../../../common/Images/Carrer/joboffers.jpg';
import cv from '../../../common/Images/Carrer/CVCreator.jpg';

export const CarrerSection = () => {
    return (
        <Wrapper>
            <Title> My Carrer</Title>

            <ProfileWrapper>
                <ContentWrapper>
                    <ProfileImg src={profile} />
                    <TextWrapper>
                        <ProfileTitle>My Profile</ProfileTitle>
                        <ProfileSpan>- simpler application</ProfileSpan>
                        <ProfileSpan>- faster access to recruitment documents</ProfileSpan>
                        <ProfileSpan>- automatic completion of questions from employers </ProfileSpan>
                    </TextWrapper>
                </ContentWrapper>
                <ProfileLink to="/Profile">Go to profile </ProfileLink>
            </ProfileWrapper>

            <TilesWrapper>
                <CarrerTile>
                    <CarrerImg src={cv} />
                    <TextContainer>
                        <TileTitle>CV Creator</TileTitle>
                        <TileSpan>Create your CV in a few simple steps with our CV creator</TileSpan>
                    </TextContainer>
                </CarrerTile>

                <CarrerTile>
                    <CarrerImg src={offers} />
                    <TextContainer>
                        <TileTitle>Job Offers</TileTitle>
                        <TileSpan>Check the latest job offers and find your dream job</TileSpan>
                    </TextContainer>
                </CarrerTile>

                <CarrerTile>
                    <CarrerImg src={calculator} />
                    <TextContainer>
                        <TileTitle>Salary Calculator</TileTitle>
                        <TileSpan>Calculate net and gross earnings for different types of contracts.</TileSpan>
                    </TextContainer>
                </CarrerTile>
            </TilesWrapper>

        </Wrapper>
    );
};
