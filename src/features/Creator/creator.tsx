import React from 'react';
import { CVName, CVPreview, CVTitle, ContentWrapper, FormsWrapper, Title, Wrapper } from './styledCreator';

export const Creator = () => {
    return (
        <Wrapper>
            <Title>CV Creator</Title>

            <ContentWrapper>
                <FormsWrapper>xd</FormsWrapper>
                <CVPreview>
                    <CVTitle>-- CV --</CVTitle>
                    <CVName>Marcin Izdebski</CVName>
                </CVPreview>
            </ContentWrapper>
        </Wrapper>
    );
};

