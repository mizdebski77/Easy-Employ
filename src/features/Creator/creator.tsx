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
                    <DataTitle>Dane podstawowe</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Name' />
                        <DataInput placeholder='Surname ' />
                        <DataInput placeholder='Date of birthd' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormsWrapper>

                <CVPreview>
                    <CVTitle>-- CV --</CVTitle>
                    <CVName>Marcin Izdebski</CVName>

                    <SpanWrapper>
                        <TitleSpan>E-Mail:</TitleSpan>
                        <ContentSpan>mizdebski123@gmail.com</ContentSpan>
                    </SpanWrapper>
                    <SpanWrapper>
                        <TitleSpan>Phone:</TitleSpan>
                        <ContentSpan>501375604</ContentSpan>
                    </SpanWrapper>

                    <SpanWrapper>
                        <TitleSpan>Location:</TitleSpan>
                        <ContentSpan>Olkusz</ContentSpan>
                    </SpanWrapper>
                </CVPreview>
            </ContentWrapper>
        </Wrapper>
    );
};

