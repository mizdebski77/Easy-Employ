import React from 'react';
import { Form, Icon, IconContainer, IconSpan, IconsWrapper, InfoWrapper, InformationSpan, InfosWrapper, Input, Label, RegisterTitle, SignUpPanel, Span, SpanColor, Wrapper } from './styledRegister';
import fb from '../../common/Images/SocialMedia/fb.png';
import link from '../../common/Images/SocialMedia/link.png';
import google from '../../common/Images/SocialMedia/google.png';

export const Register = () => {
    return (
        <Wrapper>
            <SignUpPanel>
                <RegisterTitle>Create account</RegisterTitle>
                <IconsWrapper>
                    <IconContainer>
                        <Icon src={fb} />
                        <IconSpan>Sign up witth Facebook</IconSpan>
                    </IconContainer>
                    <IconContainer>
                        <Icon src={link} />
                        <IconSpan>Sign up witth Linkedin</IconSpan>
                    </IconContainer>
                    <IconContainer>
                        <Icon src={google} />
                        <IconSpan>Sign up witth Google</IconSpan>
                    </IconContainer>
                </IconsWrapper>

                <Span>Or</Span>

                <Form>
                    <Label>Email address <SpanColor>*</SpanColor></Label>
                    <Input />
                    <Label>Password <SpanColor>*</SpanColor></Label>
                    <Input />
                    <Label>Repeat password <SpanColor>*</SpanColor></Label>
                    <Input />
                </Form>

                <InfosWrapper>
                    <InfoWrapper>
                        <Input type='checkbox' />
                        <InformationSpan>I confirm that I've read and I agree to the site's Terms & Conditions and Privacy Policy.*</InformationSpan>
                    </InfoWrapper>

                    {/* <InfoWrapper>
                        <Input type='checkbox' />
                        <InformationSpan></InformationSpan>
                    </InfoWrapper> */}
                </InfosWrapper>
            </SignUpPanel>
        </Wrapper>
    );
};

