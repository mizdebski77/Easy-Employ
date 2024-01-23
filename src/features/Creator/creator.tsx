import React from 'react';
import {
    ContentWrapper,
    Title,
    Wrapper,

} from './styledCreator';
import { Forms } from './Forms/forms';
import { CvPreview } from './CvPreview/cvPreview';

export const Creator = () => {
    return (
        <Wrapper>
            <Title>CV Creator</Title>

            <ContentWrapper>
                <Forms />
                <CvPreview />
            </ContentWrapper>
        </Wrapper>
    );
};

