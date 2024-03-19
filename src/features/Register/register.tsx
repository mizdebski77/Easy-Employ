import React, { useState } from 'react';
import { CheckBox, CreateAccountButton, Form, Icon, IconContainer, IconSpan, IconsWrapper, InfoWrapper, InformationSpan, InfosWrapper, Input, Label, PasswordInput, PasswordLabel, RegisterTitle, ShowHideButton, SignUpPanel, Span, SpanColor, Wrapper } from './styledRegister';
import fb from '../../common/Images/SocialMedia/fb.png';
import link from '../../common/Images/SocialMedia/link.png';
import google from '../../common/Images/SocialMedia/google.png';
import show from '../../common/Images/SVG/show.svg';
import hide from '../../common/Images/SVG/hide.svg';

export const Register = () => {

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    const iconsArray = [
        {
            src: fb,
            text: 'Sign up with Facebook'
        },
        {
            src: link,
            text: 'Sign up with Linkedin'
        },
        {
            src: google,
            text: 'Sign up with Google'
        }
    ];


    return (
        <Wrapper>
            <SignUpPanel>
                <RegisterTitle>Create account</RegisterTitle>
                <IconsWrapper>
                    {iconsArray.map((icon, index) => (
                        <IconContainer key={index}>
                            <Icon src={icon.src} />
                            <IconSpan>{icon.text}</IconSpan>
                        </IconContainer>
                    ))}
                </IconsWrapper>

                <Span>Or</Span>

                <Form>
                    <Label>Email address <SpanColor>*</SpanColor></Label>
                    <Input placeholder='name@domain.com' />
                    <Label>Password <SpanColor>*</SpanColor></Label>


                    <PasswordLabel>
                        <PasswordInput placeholder='At least 8 characters' type={showPassword1 ? 'text' : 'password'} />
                        <ShowHideButton src={showPassword1 ? hide : show} onClick={handleShowPassword1} />
                    </PasswordLabel>

                    <Label>Repeat password <SpanColor>*</SpanColor></Label>
                    <PasswordLabel>
                        <PasswordInput placeholder='Same password as above' type={showPassword2 ? 'text' : 'password'} />
                        <ShowHideButton src={showPassword2 ? hide : show} onClick={handleShowPassword2} />
                    </PasswordLabel>

                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="gross"
                            required
                        />
                        Registration as an employer
                    </Label>

                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="net"
                            required
                        />
                        Registration as an employee
                    </Label>


                    <InfosWrapper>
                        <InfoWrapper>
                            <CheckBox type='checkbox' />
                            <InformationSpan>I confirm that I've read and I agree to the site's Terms & Conditions and Privacy Policy.*</InformationSpan>
                        </InfoWrapper>

                        <InfoWrapper>
                            <CheckBox type='checkbox' />
                            <InformationSpan>I agree to receive commercial correspondence regarding Easy Employ job boards from Easy Employ sp. z o. o. </InformationSpan>
                        </InfoWrapper>
                    </InfosWrapper>

                    <CreateAccountButton> Create account</CreateAccountButton>
                </Form>
            </SignUpPanel>
        </Wrapper>
    );
};

