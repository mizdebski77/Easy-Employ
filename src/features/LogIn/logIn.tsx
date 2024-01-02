import React from 'react';
import { Button, Form, Icon, IconsWrapper, Input, LoginSpan, LoginTitle, LoginWrapper, Wrapper } from './styledLogIn';
import fb from '../../common/Images/SocialMedia/fb.png';
import lk from '../../common/Images/SocialMedia/link.png';
import gg from '../../common/Images/SocialMedia/google.png';

export const LogIn = () => {

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
                    <Input />
                    <Input />
                <Button>Sign In</Button>
                </Form>
            </LoginWrapper>

        </Wrapper >
    );
};

