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
                        </ElementsWrapper>


                    </CVPreview>
                </div>

            </ContentWrapper>
        </Wrapper>
    );
};

