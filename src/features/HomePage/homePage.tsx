import React from 'react';
import { ButtonLink, Title, Wrapper } from './styledHomePage';

export const HomePage = () => {
    return (
        <Wrapper>
            <Title>Easy Employ - Your Way to Find a Job</Title>
            <ButtonLink to = "/form">Get started</ButtonLink>
        </Wrapper>
    );
};