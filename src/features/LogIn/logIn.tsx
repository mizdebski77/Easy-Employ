import React, { useState } from 'react';
import {
    Button,
    Form,
    Icon,
    IconsWrapper,
    Input,
    Label,
    LoginSpan,
    LoginTitle,
    LoginWrapper,
    PasswordInput,
    PasswordLabel,
    PasswordWrapper,
    RegisterButton,
    RegisterCaption,
    RegisterTitle,
    RegisterWrapper,
    ShowHideButton,
    Wrapper
} from './styledLogIn';
import fb from '../../common/Images/SocialMedia/fb.png';
import lk from '../../common/Images/SocialMedia/link.png';
import gg from '../../common/Images/SocialMedia/google.png';
import show from '../../common/Images/ShowHide/show.svg';
import hide from '../../common/Images/ShowHide/hide.svg';

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

                    <PasswordLabel>
                        <PasswordInput placeholder='Enter Password' type='password' />
                        <ShowHideButton src={show} />
                    </PasswordLabel>

                    {/* <PasswordWrapper>
                        <ShowHideButton> Forgot your password? </ShowHideButton>
                        <ShowHideButton> {password ? 'Hide' : 'Show'} password </ShowHideButton>
                    </PasswordWrapper> */}

                    <Button>Sign In</Button>
                </Form>
            </LoginWrapper>

            <RegisterWrapper>
                <RegisterTitle>New Here?</RegisterTitle>
                <RegisterCaption>Sign up and discovery a great amount of new opportunities</RegisterCaption>
                <RegisterButton to='/Register'>Sign Up</RegisterButton>
            </RegisterWrapper>

        </Wrapper >
    );
};

