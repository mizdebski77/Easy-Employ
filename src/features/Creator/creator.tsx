import React from 'react';
import { CVName, CVPreview, CVTitle, ContentSpan, ContentWrapper, FormsWrapper, SpanWrapper, Title, TitleSpan, Wrapper } from './styledCreator';

export const Creator = () => {
    return (
        <Wrapper>
            <Title>CV Creator</Title>

            <ContentWrapper>
                <FormsWrapper>xd</FormsWrapper>
                <CVPreview>
                    <CVTitle>-- CV --</CVTitle>
                    <CVName>Marcin Izdebski</CVName>

                    <SpanWrapper>
                        <TitleSpan>E-Mail:</TitleSpan>
                        <ContentSpan>mizdebski123@gmail.com</ContentSpan>
                    </SpanWrapper>
                </CVPreview>
            </ContentWrapper>
        </Wrapper>
    );
};

