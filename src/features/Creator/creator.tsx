import React from 'react';
import {
    CVName,
    CVPreview,
    CVTitle,
    ContentSpan,
    ContentWrapper,
    DataForm,
    DataInput,
    DataTitle,
    ElementsWrapper,
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

                    </CVPreview>
                </div>

            </ContentWrapper>
        </Wrapper>
    );
};

