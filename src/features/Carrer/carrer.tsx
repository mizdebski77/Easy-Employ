import React from 'react';
import {
    ButtonWrapper,
    ContentWrapper,
    EditButton,
    LocationImg,
    LocationSpan,
    LocationWrapper,
    InformationWrapper,
    Name,
    Photo,
    PhotoSection,
    Title,
    TitleSpan,
    Wrapper,
    ContactWrapper,
    SectionTitle,
    ContactItems,
    ContactSpan,
    ContactInformation,
    IconsWrapper,
    Icon,
    ExperienceWrapper,
    ExperienceTitle,
    ExperienceTile,
    ExperienceDate,
    ExperienceCompany,
    ExpDescription,
    ButtonsWrapper,
    DeleteButton
} from './styledCarrer';
import profile from '../../common/Images/profileStack.png';
import location from '../../common/Images/location.png';
import facebook from '../../common/Images/SocialMedia/fb.png';
import linkedin from '../../common/Images/SocialMedia/link.png';
import gh from '../../common/Images/SocialMedia/gh.png';

export const Carrer = () => {
    return (
        <Wrapper>
            <Title> My Career</Title>

            <InformationWrapper>
                <PhotoSection>
                    <Photo src={profile} />
                </PhotoSection>

                <ContentWrapper>
                    <Name>Marcin Izdebski </Name>

                    <LocationWrapper>
                        <LocationImg src={location} />
                        <LocationSpan> Olkusz, Małopolskie</LocationSpan>
                    </LocationWrapper>

                    <TitleSpan>Frontend Developer</TitleSpan>
                </ContentWrapper>

                <ButtonWrapper>
                    <EditButton>✎ Edit</EditButton>

                </ButtonWrapper>
            </InformationWrapper>

            <SectionTitle>
                Contact details
            </SectionTitle>

            <ContactWrapper>
                <ContactItems>
                    <ContactSpan> E-Mail </ContactSpan>
                    <ContactInformation>mizdebski123@gmail.com</ContactInformation>
                </ContactItems>

                <ContactItems>
                    <ContactSpan> Phone </ContactSpan>
                    <ContactInformation>501375604</ContactInformation>
                </ContactItems>

                <IconsWrapper>
                    <Icon src={facebook} />
                    <Icon src={linkedin} />
                    <Icon src={gh} />
                </IconsWrapper>

                <EditButton>✎  Edit</EditButton>
            </ContactWrapper>

            <SectionTitle>
                Work Experience
            </SectionTitle>

            <ExperienceWrapper>
                <ExperienceTile>
                    <ContentWrapper>
                        <ExperienceTitle>Frontend Developer / <ExperienceDate>02.12 - 04.12</ExperienceDate></ExperienceTitle>
                        <ExperienceCompany>Freelance</ExperienceCompany>

                        <ExpDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non, consectetur sint libero magni dolorum, eius nam quaerat distinctio ullam molestiae cum sit excepturi dolorem dolores architecto iusto inventore hic.
                        </ExpDescription>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>

                </ExperienceTile>

            </ExperienceWrapper>


        </Wrapper>
    );
};

