import React from 'react';
import {
    CVName,
    CVPreview,
    CVSectionTitle,
    CVTitle,
    ContentSpan,
    ContentWrapper,
    DataForm,
    DataInput,
    DataTitle,
    ElementsWrapper,
    ExpSecondTitle,
    ExpContent,
    ExpDuration,
    TilesWrapper,
    ExpWrapper,
    FormWrapper,
    FormsWrapper,
    SaveButton,
    SpanWrapper,
    Title,
    TitleSpan,
    Wrapper,
    InterestsWrapper,
    Link,
    ClausuleWrapper,
    Clausule,
    TextArea,
} from './styledCreator';

export const Creator = () => {
    return (
        <Wrapper>
            <Title>CV Creator</Title>

            <ContentWrapper>
                <FormsWrapper>
                    <FormWrapper>
                        <DataTitle>Basic information</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Name' />
                            <DataInput placeholder='Surname ' />
                            <DataInput placeholder='Date of birthd' />
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>
                        <DataTitle>Location</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Country' />
                            <DataInput placeholder='City ' />
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>
                        <DataTitle>Contact Informations</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Phone' />
                            <DataInput placeholder='E-Mail ' />
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>

                        <DataTitle>Work experience</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Position' />
                            <DataInput placeholder='Company Name ' />
                            <DataInput placeholder='Location' />
                            <DataInput placeholder='Start date' />
                            <DataInput placeholder='End date' />
                            <DataInput placeholder='Still working' />
                            <TextArea placeholder='Description'></TextArea>
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>
                        <DataTitle>Education</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Level of education' />
                            <DataInput placeholder='School Name' />
                            <DataInput placeholder='Field ' />
                            <DataInput placeholder='Start date' />
                            <DataInput placeholder='End date' />
                            <DataInput placeholder='Still Learning' />
                            <TextArea placeholder='Description'></TextArea>
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>
                        <DataTitle>Courses</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Course Name' />
                            <DataInput placeholder='Organizer' />
                            <DataInput placeholder='Start date' />
                            <DataInput placeholder='End date' />
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>

                    <FormWrapper>
                        <DataTitle>Languages</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Languagesn' />
                            <DataInput placeholder='Level' />
                            <SaveButton>+ Save</SaveButton>
                        </DataForm>
                    </FormWrapper>
                </FormsWrapper>

                <div>
                    <CVPreview>
                        <CVTitle>-- CV --</CVTitle>
                        <CVName>Marcin Izdebski</CVName>

                        <ElementsWrapper>
                            <SpanWrapper>
                                <TitleSpan>E-Mail:</TitleSpan>
                                <ContentSpan>mizdebski123@gmail.com</ContentSpan>
                            </SpanWrapper>
                            <SpanWrapper>
                                <TitleSpan>Date of Birthd:</TitleSpan>
                                <ContentSpan>16.11.1999</ContentSpan>
                            </SpanWrapper>
                            <SpanWrapper>
                                <TitleSpan>Phone:</TitleSpan>
                                <ContentSpan>501375604</ContentSpan>
                            </SpanWrapper>

                            <SpanWrapper>
                                <TitleSpan>Location:</TitleSpan>
                                <ContentSpan>Olkusz</ContentSpan>
                            </SpanWrapper>
                        </ElementsWrapper>

                        <ElementsWrapper>
                            <CVSectionTitle>Work experience</CVSectionTitle>
                            <TilesWrapper>
                                <ExpWrapper>
                                    <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                                    <ExpSecondTitle>Freelance</ExpSecondTitle>
                                    <ExpContent>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                                    </ExpContent>
                                </ExpWrapper>

                                <ExpWrapper>
                                    <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                                    <ExpSecondTitle>Freelance</ExpSecondTitle>
                                    <ExpContent>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                                    </ExpContent>
                                </ExpWrapper>
                            </TilesWrapper>
                        </ElementsWrapper>


                        <ElementsWrapper>
                            <CVSectionTitle>Education</CVSectionTitle>
                            <TitleSpan>The Silesian Technical University /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                            <ExpSecondTitle><TitleSpan>Enginerr:</TitleSpan> Electronic & Telecomunication</ExpSecondTitle>
                        </ElementsWrapper>

                        <ElementsWrapper>
                            <CVSectionTitle>Courses</CVSectionTitle>
                            <TitleSpan>Frontend Developer Course /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                            <ExpSecondTitle>YouCode</ExpSecondTitle>
                        </ElementsWrapper>

                        <ElementsWrapper>
                            <CVSectionTitle>Interests</CVSectionTitle>
                            <InterestsWrapper>
                                Learning new technologies, learning foreign languages, hiking, graphic design
                            </InterestsWrapper>
                        </ElementsWrapper>

                        <ElementsWrapper>
                            <CVSectionTitle>Links</CVSectionTitle>
                            <TitleSpan>Portfolio</TitleSpan>
                            <Link>https://mizdebski77.github.io/Homepage/</Link>

                            <TitleSpan>Portfolio</TitleSpan>
                            <Link>https://mizdebski77.github.io/Homepage/</Link>
                        </ElementsWrapper>

                        <ClausuleWrapper>
                            <CVSectionTitle>Clause</CVSectionTitle>
                            <Clausule> I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to thePersonal Data Protection Act of 10 May
                                2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU)2016/679 of the European Parliament and of the Council of 27 April 2016 on the
                                protection of natural persons with regard tothe processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General
                                Data Protection Regulation)
                            </Clausule>
                        </ClausuleWrapper>


                    </CVPreview>
                </div>

            </ContentWrapper>
        </Wrapper>
    );
};

