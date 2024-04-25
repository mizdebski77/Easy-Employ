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
    ElementWrapper,
    TileTitle,
    Tile,
    ExperienceDate,
    TileSecondTitle,
    TileDescription,
    ButtonsWrapper,
    DeleteButton,
    Degree,
    EnglishLevel,
    Hobbies,
    LinkToWebsite,
    SkillsForm,
    Input,
    AddButton,
    SkillsWrapper,
    Legend,
    SkillsContainer,
    RemoveSkillButton,
    Skill,
    FullScreenWrapper,
    CloseButton,
} from './styledCarrer';
import profile from '../../common/Images/profileStack.png';
import location from '../../common/Images/location.png';
import facebook from '../../common/Images/SocialMedia/fb.png';
import linkedin from '../../common/Images/SocialMedia/link.png';
import gh from '../../common/Images/SocialMedia/gh.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { AiOutlineClose } from 'react-icons/ai'

export const Carrer = () => {

    const basicInformations = useSelector((state: RootState) => state.carrer.basicInformations)

    console.log(basicInformations);


    return (
        <Wrapper>
            <FullScreenWrapper>
                <CloseButton>
                    <AiOutlineClose size={35} />
                </CloseButton>
            </FullScreenWrapper>
            <Title> My Career</Title>

            <InformationWrapper>
                <PhotoSection>
                    <Photo src={profile} />
                </PhotoSection>

                <ContentWrapper>
                    <Name>{basicInformations.name} </Name>

                    <LocationWrapper>
                        <LocationImg src={location} />
                        <LocationSpan> {basicInformations.location} </LocationSpan>
                    </LocationWrapper>

                    <TitleSpan>{basicInformations.position} </TitleSpan>
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
                    <ContactSpan> E-Mail: </ContactSpan>
                    <ContactInformation>{basicInformations.email}</ContactInformation>
                </ContactItems>

                <ContactItems>
                    <ContactSpan>Phone: </ContactSpan>
                    <ContactInformation>{basicInformations.number}</ContactInformation>
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

            <ElementWrapper>
                <Tile>
                    <ContentWrapper>
                        <TileTitle>Frontend Developer / <ExperienceDate>02.12 - 04.12</ExperienceDate></TileTitle>
                        <TileSecondTitle>Freelance</TileSecondTitle>

                        <TileDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non, consectetur sint libero magni dolorum, eius nam quaerat distinctio ullam molestiae cum sit excepturi dolorem dolores architecto iusto inventore hic.
                        </TileDescription>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>

                </Tile>

                <Tile>
                    <ContentWrapper>
                        <TileTitle>Frontend Developer / <ExperienceDate>02.12 - 04.12</ExperienceDate></TileTitle>
                        <TileSecondTitle>Freelance</TileSecondTitle>

                        <TileDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non, consectetur sint libero magni dolorum, eius nam quaerat distinctio ullam molestiae cum sit excepturi dolorem dolores architecto iusto inventore hic.
                        </TileDescription>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>

                </Tile>

            </ElementWrapper>

            <SectionTitle>
                Education
            </SectionTitle>

            <ElementWrapper>
                <Tile>
                    <ContentWrapper>
                        <TileTitle>The Silesian Technical University / <ExperienceDate>02.12 - 04.12</ExperienceDate></TileTitle>
                        <TileSecondTitle>Electronic and Telecomuniation</TileSecondTitle>
                        <Degree>Engineer</Degree>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>
                </Tile>
            </ElementWrapper>

            <SectionTitle>
                Languages
            </SectionTitle>

            <ElementWrapper>
                <Tile>
                    <ContentWrapper>
                        <TileTitle>English -<EnglishLevel> B2</EnglishLevel></TileTitle>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>
                </Tile>
            </ElementWrapper>

            <SectionTitle>
                Skillset
            </SectionTitle>
            <ElementWrapper>
                <SkillsForm>
                    <Input placeholder='Skill' />
                    <AddButton>Add</AddButton>
                </SkillsForm>
                <SkillsWrapper>
                    <Legend>Skills</Legend>
                    <SkillsContainer>
                        <Skill>React</Skill>
                        <RemoveSkillButton>x</RemoveSkillButton>
                    </SkillsContainer>

                </SkillsWrapper>
            </ElementWrapper>

            <SectionTitle>
                Courses
            </SectionTitle>

            <ElementWrapper>
                <Tile>
                    <ContentWrapper>
                        <TileTitle>Frontend Developer Course / <ExperienceDate>02.12 - 04.12</ExperienceDate></TileTitle>
                        <TileSecondTitle>YouCode</TileSecondTitle>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>
                </Tile>
            </ElementWrapper>

            <SectionTitle>
                Hobby
            </SectionTitle>

            <ElementWrapper>
                <Tile>
                    <Hobbies>Learning new technologies, learning foreign languages, hiking, graphic design,  </Hobbies>

                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>
                </Tile>
            </ElementWrapper>

            <SectionTitle>
                Links
            </SectionTitle>

            <ElementWrapper>
                <Tile>
                    <ContentWrapper>
                        <TileTitle>Personal HomePage</TileTitle>
                        <LinkToWebsite>https://mizdebski77.github.io/Homepage/</LinkToWebsite>
                    </ContentWrapper>
                    <ButtonsWrapper>
                        <EditButton>✎ Edit</EditButton>
                        <DeleteButton>Delete</DeleteButton>
                    </ButtonsWrapper>
                </Tile>
            </ElementWrapper>
        </Wrapper>
    );
};

