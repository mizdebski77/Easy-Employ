import React, { useState } from 'react';
import { Button, Form, Icon, IconsWrapper, Input, Label, LoginSpan, LoginTitle, LoginWrapper, RegisterButton, RegisterCaption, RegisterTitle, RegisterWrapper, ShowHideButton, Wrapper } from './styledLogIn';
import fb from '../../common/Images/SocialMedia/fb.png';
import lk from '../../common/Images/SocialMedia/link.png';
import gg from '../../common/Images/SocialMedia/google.png';

export const LogIn = () => {

    const [password, setPassword] = useState(false);

    return (
        <Wrapper>
            <LoginWrapper>
                <LoginTitle>Login to Your Account</LoginTitle>
                <LoginSpan>Login using social networks</LoginSpan>

                <IconsWrapper>
                    <Icon src={fb} />
                    <Icon src={lk} />
                    <Icon src={gg} />
                </IconsWrapper>
                <LoginSpan>or</LoginSpan>

                <Form>
                    <Label>Username</Label>
                    <Input placeholder='Enter E-Mail' type='email' />

                    <Label>Password</Label>

                    <Input placeholder='Enter Password' type='password' />
                    <ShowHideButton> {password ? 'Hide' : 'Show'} password </ShowHideButton>
                    <Button>Sign In</Button>
                </Form>
            </LoginWrapper>

            <RegisterWrapper>

                <RegisterTitle>New Here?</RegisterTitle>
                <RegisterCaption>Sign up and discovery a great amount of new opportunities</RegisterCaption>
                <RegisterButton to='/xd'>Sign Up</RegisterButton>
            </RegisterWrapper>

        </Wrapper >
    );
};

