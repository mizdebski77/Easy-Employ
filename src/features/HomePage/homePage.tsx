import React from 'react';
import { ButtonLink, Title, TitleFirstLetters, TitleParagraph, Wrapper } from './styledHomePage';

export const HomePage = () => {
    return (
        <Wrapper>
            <Title>
                <TitleFirstLetters>E</TitleFirstLetters>asy 
                <TitleFirstLetters> E</TitleFirstLetters>mploy
                <TitleParagraph>
                    Your Way to Find a Job
                </TitleParagraph>
            </Title>
            <ButtonLink to="/form">Get started</ButtonLink>
        </Wrapper>
    );
};