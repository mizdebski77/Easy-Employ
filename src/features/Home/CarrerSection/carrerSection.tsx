import { CarrerImg, CarrerTile, Container, ContentWrapper, ProfileImg, ProfileLink, ProfileSpan, ProfileTitle, ProfileWrapper, SectionLabel, TextContainer, TextWrapper, TileLink, TileSpan, TileTitle, TilesWrapper, Title, Wrapper } from './styledCarrerSection';
import { scrollTop } from '../../../core/scrollTop';
import { profileSpan, tiles } from '../../../core/arrays';

export const CarrerSection = () => {
    return (
        <Wrapper>
            <Container>
                <SectionLabel>Your career hub</SectionLabel>
                <Title>Everything you need</Title>

                <ProfileWrapper>
                    <ContentWrapper>
                        <ProfileImg>EE</ProfileImg>
                        <TextWrapper>
                            <ProfileTitle>My Career Profile</ProfileTitle>
                            {profileSpan.map((span) => (
                                <ProfileSpan key={span}>{span}</ProfileSpan>
                            ))}
                        </TextWrapper>
                    </ContentWrapper>
                    <ProfileLink to="/Carrer" onClick={() => scrollTop()}>View my profile →</ProfileLink>
                </ProfileWrapper>

                <TilesWrapper>
                    {tiles.map((tile) => (
                        <CarrerTile key={tile.id}>
                            <CarrerImg src={tile.img} alt={tile.title} />
                            <TextContainer>
                                <TileTitle>{tile.title}</TileTitle>
                                <TileSpan>{tile.text}</TileSpan>
                            </TextContainer>
                            <TileLink to={tile.link} onClick={() => scrollTop()}>Explore →</TileLink>
                        </CarrerTile>
                    ))}
                </TilesWrapper>
            </Container>
        </Wrapper>
    );
};
