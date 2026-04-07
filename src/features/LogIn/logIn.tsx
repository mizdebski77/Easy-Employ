import React, { useState } from 'react';
import {
    Button, Divider, ForgotPasswordButton, Form, Icon, IconsWrapper,
    Input, Label, LoginSpan, LoginTitle, LoginWrapper, PasswordFunctionWrapper,
    PasswordInput, PasswordLabel, RegisterButton, RegisterWrapper,
    RememberMeInput, RememberMeSpan, RememberMeWrapper, ShowHideButton,
    SocialButton, Wrapper
} from './styledLogIn';
import show from '../../common/Images/SVG/show.svg';
import hide from '../../common/Images/SVG/hide.svg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Signed in successfully! 👋');
        setTimeout(() => navigate('/Home'), 1000);
    };

    return (
        <Wrapper>
            <LoginWrapper>
                <LoginTitle>Welcome back</LoginTitle>
                <LoginSpan>Sign in to your Easy Employ account</LoginSpan>

                <IconsWrapper>
                    <SocialButton type="button">G &nbsp;Google</SocialButton>
                    <SocialButton type="button">in &nbsp;LinkedIn</SocialButton>
                    <SocialButton type="button">f &nbsp;Facebook</SocialButton>
                </IconsWrapper>

                <Divider>or continue with email</Divider>

                <Form onSubmit={handleSubmit}>
                    <div>
                        <Label>Email address</Label>
                        <Input placeholder='name@domain.com' type='email' required />
                    </div>

                    <div>
                        <Label>Password</Label>
                        <PasswordLabel>
                            <PasswordInput
                                placeholder='Your password'
                                type={showPass ? 'text' : 'password'}
                                required
                                minLength={6}
                            />
                            <ShowHideButton
                                src={showPass ? hide : show}
                                onClick={() => setShowPass(!showPass)}
                            />
                        </PasswordLabel>
                    </div>

                    <PasswordFunctionWrapper>
                        <RememberMeWrapper>
                            <RememberMeInput type='checkbox' />
                            <RememberMeSpan>Remember me</RememberMeSpan>
                        </RememberMeWrapper>
                        <ForgotPasswordButton to="/password-reset">Forgot password?</ForgotPasswordButton>
                    </PasswordFunctionWrapper>

                    <Button type="submit">Sign In</Button>
                </Form>

                <RegisterWrapper>
                    No account?
                    <RegisterButton to='/Register'>Create one</RegisterButton>
                </RegisterWrapper>
            </LoginWrapper>
        </Wrapper>
    );
};
