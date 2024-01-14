import React from 'react';
import { ResetSection, ResetTitle, ResetTitleButton, ResetTitleWrapper, Wrapper } from './styledResetPassword';
import { RegisterWrapper, RegisterTitle, RegisterCaption, RegisterButton } from '../styledLogIn';

export const ResetPassword = () => {
    return (
        <Wrapper>
            <ResetSection>
                <ResetTitleWrapper>
                    <ResetTitleButton to="/Log-In">🡨</ResetTitleButton>
                    <ResetTitle>Password assistance</ResetTitle>
                </ResetTitleWrapper>
            </ResetSection>

            <RegisterWrapper>
                <RegisterTitle>New Here?</RegisterTitle>
                <RegisterCaption>Sign up and discovery a great amount of new opportunities</RegisterCaption>
                <RegisterButton to='/Register'>Sign Up</RegisterButton>
            </RegisterWrapper>
        </Wrapper>
    );
};

