import React from 'react';
import { Icon, IconContainer, IconsWrapper, RegisterTitle, SignUpPanel, Wrapper } from './styledRegister';
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
                    </IconContainer>
                    <IconContainer>
                        <Icon src={link} />
                    </IconContainer>
                    <IconContainer>
                        <Icon src={google} />
                    </IconContainer>

                </IconsWrapper>
            </SignUpPanel>
        </Wrapper>
    );
};

