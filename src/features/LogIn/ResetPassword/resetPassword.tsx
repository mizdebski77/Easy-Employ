import React from 'react';
import { Wrapper } from './styledResetPassword';
import { RegisterWrapper, RegisterTitle, RegisterCaption, RegisterButton } from '../styledLogIn';

export const ResetPassword = () => {
    return (
        <Wrapper>

            <RegisterWrapper>
                <RegisterTitle>New Here?</RegisterTitle>
                <RegisterCaption>Sign up and discovery a great amount of new opportunities</RegisterCaption>
                <RegisterButton to='/Register'>Sign Up</RegisterButton>
            </RegisterWrapper>
        </Wrapper>
    );
};

