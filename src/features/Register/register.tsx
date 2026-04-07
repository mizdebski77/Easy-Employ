import React, { useState } from 'react';
import {
    CheckBox, CreateAccountButton, Form, IconContainer, IconsWrapper,
    Input, Label, PasswordInput, PasswordLabel, RegisterSubtitle,
    RegisterTitle, ShowHideButton, SignInLink, SignInLinkAnchor,
    SignUpPanel, Span, SpanColor, Wrapper
} from './styledRegister';
import show from '../../common/Images/SVG/show.svg';
import hide from '../../common/Images/SVG/hide.svg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const p1 = fd.get('password') as string;
        const p2 = fd.get('password2') as string;

        if (p1 !== p2) {
            toast.error('Passwords do not match');
            return;
        }
        toast.success('Account created! Welcome to Easy Employ 🎉');
        setTimeout(() => navigate('/Home'), 1200);
    };

    return (
        <Wrapper>
            <SignUpPanel>
                <RegisterTitle>Create account</RegisterTitle>
                <RegisterSubtitle>Join thousands of IT professionals</RegisterSubtitle>

                <IconsWrapper>
                    <IconContainer type="button">G &nbsp;Google</IconContainer>
                    <IconContainer type="button">in &nbsp;LinkedIn</IconContainer>
                    <IconContainer type="button">f &nbsp;Facebook</IconContainer>
                </IconsWrapper>

                <Span>or sign up with email</Span>

                <Form onSubmit={handleSubmit}>
                    <div>
                        <Label>Email address <SpanColor>*</SpanColor></Label>
                        <Input name="email" type="email" placeholder='name@domain.com' required />
                    </div>

                    <div>
                        <Label>Password <SpanColor>*</SpanColor></Label>
                        <PasswordLabel>
                            <PasswordInput
                                name="password"
                                placeholder='At least 8 characters'
                                type={showPass1 ? 'text' : 'password'}
                                minLength={8}
                                required
                            />
                            <ShowHideButton src={showPass1 ? hide : show} onClick={() => setShowPass1(!showPass1)} />
                        </PasswordLabel>
                    </div>

                    <div>
                        <Label>Repeat password <SpanColor>*</SpanColor></Label>
                        <PasswordLabel>
                            <PasswordInput
                                name="password2"
                                placeholder='Same as above'
                                type={showPass2 ? 'text' : 'password'}
                                minLength={8}
                                required
                            />
                            <ShowHideButton src={showPass2 ? hide : show} onClick={() => setShowPass2(!showPass2)} />
                        </PasswordLabel>
                    </div>

                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9090a8', cursor: 'pointer' }}>
                        <CheckBox type="checkbox" required />
                        I accept the <span style={{ color: '#4f8ef7', marginLeft: 3 }}>Terms of Service</span>
                    </label>

                    <CreateAccountButton type="submit">Create Account</CreateAccountButton>
                </Form>

                <SignInLink>
                    Already have an account?
                    <SignInLinkAnchor to='/Log-In'>Sign in</SignInLinkAnchor>
                </SignInLink>
            </SignUpPanel>
        </Wrapper>
    );
};
