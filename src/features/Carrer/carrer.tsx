import React from 'react';
import {
    AddButton, Avatar, ButtonsWrapper, ContactInformation, ContactItems,
    ContactSpan, ContactWrapper, ContentWrapper, Degree, DeleteButton,
    EditButton, ElementWrapper, EnglishLevel, ExperienceDate, GridLayout,
    Hobbies, Icon, IconsWrapper, LinkToWebsite, LocationSpan, LocationWrapper,
    Name, Section, SectionTitle, Skill, SkillsContainer, Tile, TileDescription,
    TileSecondTitle, TileTitle, TitleSpan, Title, Wrapper, ProfileHeader, ButtonWrapper
} from './styledCarrer';
import facebook from '../../common/Images/SocialMedia/fb.png';
import linkedin from '../../common/Images/SocialMedia/link.png';
import gh from '../../common/Images/SocialMedia/gh.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { AiOutlineClose } from 'react-icons/ai';
import { toggleEditWindow } from './carrerSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { FullScreenWrapper, CloseButton } from './styledCarrer';

export const Carrer = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.carrer);
    const editWindow = data.editWindow;

    return (
        <Wrapper>
            {editWindow && (
                <AnimatePresence>
                    <FullScreenWrapper
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CloseButton onClick={() => dispatch(toggleEditWindow())}>
                            <AiOutlineClose size={20} />
                        </CloseButton>
                    </FullScreenWrapper>
                </AnimatePresence>
            )}

            <Title>My Career</Title>

            {/* Profile Header */}
            <ProfileHeader>
                <Avatar>MZ</Avatar>
                <div>
                    <Name>Marek Zdebski</Name>
                    <TitleSpan>Frontend Developer</TitleSpan>
                    <LocationWrapper>
                        <LocationSpan>Warsaw, Poland</LocationSpan>
                    </LocationWrapper>
                </div>
                <ButtonWrapper>
                    <EditButton onClick={() => dispatch(toggleEditWindow())}>✎ Edit</EditButton>
                </ButtonWrapper>
            </ProfileHeader>

            <GridLayout>
                {/* Left column */}
                <div>
                    {/* Contact */}
                    <Section>
                        <SectionTitle>
                            Contact details
                            <AddButton>Edit</AddButton>
                        </SectionTitle>
                        <ContactWrapper>
                            <ContactItems>
                                <ContactSpan>Email</ContactSpan>
                                <ContactInformation>marek@example.com</ContactInformation>
                            </ContactItems>
                            <ContactItems>
                                <ContactSpan>Phone</ContactSpan>
                                <ContactInformation>+48 501 234 567</ContactInformation>
                            </ContactItems>
                            <ContactItems>
                                <ContactSpan>Links</ContactSpan>
                                <IconsWrapper>
                                    <Icon src={facebook} alt="Facebook" />
                                    <Icon src={linkedin} alt="LinkedIn" />
                                    <Icon src={gh} alt="GitHub" />
                                </IconsWrapper>
                            </ContactItems>
                        </ContactWrapper>
                    </Section>

                    {/* Work Experience */}
                    <Section>
                        <SectionTitle>
                            Work Experience
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <ElementWrapper>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>
                                        Frontend Developer &nbsp;
                                        <ExperienceDate>Jan 2023 – Present</ExperienceDate>
                                    </TileTitle>
                                    <TileSecondTitle>Tech Innovators Sp. z o.o.</TileSecondTitle>
                                    <TileDescription>
                                        Building React applications with TypeScript. Implemented Redux Toolkit state management and optimized performance with React Query caching.
                                    </TileDescription>
                                </ContentWrapper>
                                <ButtonsWrapper>
                                    <EditButton>✎</EditButton>
                                    <DeleteButton>Delete</DeleteButton>
                                </ButtonsWrapper>
                            </Tile>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>
                                        Junior Web Developer &nbsp;
                                        <ExperienceDate>Jun 2022 – Dec 2022</ExperienceDate>
                                    </TileTitle>
                                    <TileSecondTitle>Freelance · Remote</TileSecondTitle>
                                    <TileDescription>
                                        Built responsive landing pages and small e-commerce sites using React and Styled Components.
                                    </TileDescription>
                                </ContentWrapper>
                                <ButtonsWrapper>
                                    <EditButton>✎</EditButton>
                                    <DeleteButton>Delete</DeleteButton>
                                </ButtonsWrapper>
                            </Tile>
                        </ElementWrapper>
                    </Section>

                    {/* Education */}
                    <Section>
                        <SectionTitle>
                            Education
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <ElementWrapper>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>
                                        The Silesian Technical University &nbsp;
                                        <ExperienceDate>2019 – 2023</ExperienceDate>
                                    </TileTitle>
                                    <TileSecondTitle>Electronics and Telecommunications</TileSecondTitle>
                                    <Degree>Engineer</Degree>
                                </ContentWrapper>
                                <ButtonsWrapper>
                                    <EditButton>✎</EditButton>
                                    <DeleteButton>Delete</DeleteButton>
                                </ButtonsWrapper>
                            </Tile>
                        </ElementWrapper>
                    </Section>

                    {/* Courses */}
                    <Section>
                        <SectionTitle>
                            Courses &amp; Certifications
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <ElementWrapper>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>
                                        Frontend Developer Bootcamp &nbsp;
                                        <ExperienceDate>2022</ExperienceDate>
                                    </TileTitle>
                                    <TileSecondTitle>YouCode</TileSecondTitle>
                                </ContentWrapper>
                                <ButtonsWrapper>
                                    <EditButton>✎</EditButton>
                                    <DeleteButton>Delete</DeleteButton>
                                </ButtonsWrapper>
                            </Tile>
                        </ElementWrapper>
                    </Section>
                </div>

                {/* Right column */}
                <div>
                    {/* Skills */}
                    <Section>
                        <SectionTitle>
                            Tech Skills
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <SkillsContainer>
                            {['React', 'TypeScript', 'Redux Toolkit', 'Styled Components', 'React Query', 'Node.js', 'HTML5', 'CSS3', 'Git', 'Framer Motion'].map(s => (
                                <Skill key={s}>{s}</Skill>
                            ))}
                        </SkillsContainer>
                    </Section>

                    {/* Languages */}
                    <Section>
                        <SectionTitle>
                            Languages
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <ElementWrapper>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>Polish</TileTitle>
                                </ContentWrapper>
                                <EnglishLevel>Native</EnglishLevel>
                            </Tile>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>English</TileTitle>
                                </ContentWrapper>
                                <EnglishLevel>B2</EnglishLevel>
                            </Tile>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>German</TileTitle>
                                </ContentWrapper>
                                <EnglishLevel style={{ color: '#f59e0b' }}>A2</EnglishLevel>
                            </Tile>
                        </ElementWrapper>
                    </Section>

                    {/* Hobbies */}
                    <Section>
                        <SectionTitle>
                            Interests
                            <AddButton>Edit</AddButton>
                        </SectionTitle>
                        <Hobbies>
                            Open source development, UI/UX design, hiking, photography, learning foreign languages.
                        </Hobbies>
                    </Section>

                    {/* Links */}
                    <Section>
                        <SectionTitle>
                            Links
                            <AddButton>+ Add</AddButton>
                        </SectionTitle>
                        <ElementWrapper>
                            <Tile>
                                <ContentWrapper>
                                    <TileTitle>Portfolio</TileTitle>
                                    <LinkToWebsite href="https://mizdebski77.github.io/Homepage/" target="_blank">
                                        mizdebski77.github.io
                                    </LinkToWebsite>
                                </ContentWrapper>
                                <ButtonsWrapper>
                                    <EditButton>✎</EditButton>
                                    <DeleteButton>Delete</DeleteButton>
                                </ButtonsWrapper>
                            </Tile>
                        </ElementWrapper>
                    </Section>
                </div>
            </GridLayout>
        </Wrapper>
    );
};
