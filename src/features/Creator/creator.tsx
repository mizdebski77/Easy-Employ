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
    ExpCompany,
    ExpContent,
    ExpDuration,
    ExpTilesWrapper,
    ExpWrapper,
    FormWrapper,
    FormsWrapper,
    SaveButton,
    SpanWrapper,
    Title,
    TitleSpan,
    Wrapper
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
                            <ExpTilesWrapper>
                                <ExpWrapper>
                                    <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                                    <ExpCompany>Freelance</ExpCompany>
                                    <ExpContent>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                                    </ExpContent>
                                </ExpWrapper>

                                <ExpWrapper>
                                    <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                                    <ExpCompany>Freelance</ExpCompany>
                                    <ExpContent>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                                    </ExpContent>
                                </ExpWrapper>
                            </ExpTilesWrapper>
                        </ElementsWrapper>


                        <ElementsWrapper>
                            <CVSectionTitle>Education</CVSectionTitle>
                            <ExpTilesWrapper>
                                <ExpWrapper>
                                    <TitleSpan>The Silesian Technical University /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                                    <ExpCompany><TitleSpan>Enginerr:</TitleSpan> Electronic & Telecomunication</ExpCompany>
                                </ExpWrapper>
                            </ExpTilesWrapper>
                        </ElementsWrapper>

                    </CVPreview>
                </div>

            </ContentWrapper>
        </Wrapper>
    );
};

