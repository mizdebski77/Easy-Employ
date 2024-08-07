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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { AiOutlineClose } from 'react-icons/ai'
import { toggleEditWindow } from './carrerSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { closeWrapper, openWrapper } from '../../core/animationsStore';

export const Carrer = () => {

    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.carrer)
    const editWindow = data.editWindow;

    return (
        <Wrapper>

            {editWindow && (
                <AnimatePresence>
                    <FullScreenWrapper
                        as={motion.div}
                        initial={closeWrapper}
                        animate={editWindow ? openWrapper : closeWrapper}
                        transition={{ duration: 0.5 }}
                    >
                        <CloseButton onClick={() => dispatch(toggleEditWindow())}>
                            <AiOutlineClose size={35} />
                        </CloseButton>
                    </FullScreenWrapper>
                </AnimatePresence>
            )}
            <Title> My Career</Title>

            <InformationWrapper>
                <PhotoSection>
                    <Photo src={profile} />
                </PhotoSection>

                <ContentWrapper>
                    <Name>{data.basicInformations.name} </Name>

                    <LocationWrapper>
                        <LocationImg src={location} />
                        <LocationSpan> {data.basicInformations.location} </LocationSpan>
                    </LocationWrapper>

                    <TitleSpan>{data.basicInformations.position} </TitleSpan>
                </ContentWrapper>

                <ButtonWrapper>
                    <EditButton onClick={() => dispatch(toggleEditWindow())}>✎ Edit</EditButton>
                </ButtonWrapper>
            </InformationWrapper>

            <SectionTitle>
                Contact details
            </SectionTitle>

            <ContactWrapper>
                <ContactItems>
                    <ContactSpan> E-Mail: </ContactSpan>
                    <ContactInformation>{data.basicInformations.email}</ContactInformation>
                </ContactItems>

                <ContactItems>
                    <ContactSpan>Phone: </ContactSpan>
                    <ContactInformation>{data.basicInformations.number}</ContactInformation>
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

            </ElementWrapper>

            {/* <SectionTitle>
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
            </SectionTitle> */}
            {/* <ElementWrapper>
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
            </ElementWrapper> */}
        </Wrapper>
    );
};

