import React from 'react';
import { CarrerImg, CarrerTile, Container, ContentWrapper, ProfileImg, ProfileLink, ProfileSpan, ProfileTitle, ProfileWrapper, TextContainer, TextWrapper, TileLink, TileSpan, TileTitle, TilesWrapper, Title, Wrapper } from './styledCarrerSection';
import profile from '../../../common/Images/profile.png';
import calculator from '../../../common/Images/Carrer/sallarycalculaor.jpg';
import offers from '../../../common/Images/Carrer/joboffers.jpg';
import cv from '../../../common/Images/Carrer/CVCreator.jpg';
import { scrollTop } from '../../../core/scrollTop';

export const CarrerSection = () => {
    const tiles = [
        {
            id: 1,
            img: cv,
            title: 'CV Creator',
            text: 'Create your CV in a few simple steps with our CV creator',
            link: '/CV-Creator',
        },

        {
            id: 2,
            img: offers,
            title: 'Job Offers',
            text: 'Check the latest job offers and find your dream job',
            link: '/Offers',
        },

        {
            id: 3,
            img: calculator,
            title: 'Salary Calculator',
            text: 'Calculate net and gross earnings for different types of contracts.',
            link: '/Calculator',
        }


    ]
    return (
        <Wrapper>
            <Container>
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
                    <ProfileLink to="/Carrer" onClick={() => scrollTop()}>Go to profile </ProfileLink>
                </ProfileWrapper>

                <TilesWrapper>
                    {tiles.map((tile) => (
                        <CarrerTile key={tile.id}>
                            <CarrerImg src={tile.img} />
                            <TextContainer>
                                <TileTitle>{tile.title}</TileTitle>
                                <TileSpan>{tile.text}</TileSpan>
                            </TextContainer>
                            <TileLink to={tile.link} onClick={() => scrollTop()}>Check 🡢 </TileLink>
                        </CarrerTile>
                    ))}
                </TilesWrapper>
            </Container>
        </Wrapper>
    );
};
