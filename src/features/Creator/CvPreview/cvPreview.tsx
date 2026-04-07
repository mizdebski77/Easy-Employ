import React from 'react';
import { PreviewName, PreviewPlaceholder, PreviewTitle, Wrapper } from './styledCvPreview';

export const CvPreview = () => {
    return (
        <Wrapper>
            <PreviewName>Your Name</PreviewName>
            <PreviewTitle>Job Title</PreviewTitle>
            <PreviewPlaceholder>Fill in the form on the left to preview your CV</PreviewPlaceholder>
        </Wrapper>
    );
};
