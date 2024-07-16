import React from 'react';
import { CarrerImg, CarrerTile, Container, ContentWrapper, ProfileImg, ProfileLink, ProfileSpan, ProfileTitle, ProfileWrapper, TextContainer, TextWrapper, TileLink, TileSpan, TileTitle, TilesWrapper, Title, Wrapper } from './styledCarrerSection';
import profile from '../../../common/Images/Home/profile.png';
import { scrollTop } from '../../../core/scrollTop';
import { profileSpan, tiles } from '../../../core/arrays';

export const CarrerSection = () => {

    return (
        <Wrapper>
            <Container>
                <Title> My Carrer</Title>

                <ProfileWrapper>
                    <ContentWrapper>
                        <ProfileImg src={profile} />
                        <TextWrapper>
                            <ProfileTitle>My Profile</ProfileTitle>
                            {profileSpan.map((span) => (
                                <ProfileSpan key={span}>- {span} </ProfileSpan>
                            ))}
                        </TextWrapper>
                    </ContentWrapper>
                    <ProfileLink to="/Carrer" onClick={() => scrollTop()}>Log In </ProfileLink>
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
