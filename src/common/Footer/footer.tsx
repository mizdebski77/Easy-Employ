import React from 'react';
import { Logo, LogoFirstLetters, LogoText, LogoWrapper, Wrapper } from './styledFooter';
import logo from '../Images/logo.png';


export const Footer = () => {
    return (
        <Wrapper>
            <LogoWrapper to='/Home'>
                <Logo src={logo} />
                <LogoText>
                    <LogoFirstLetters>E</LogoFirstLetters>asy
                    <LogoFirstLetters> E</LogoFirstLetters>mploy
                </LogoText>
            </LogoWrapper>
        </Wrapper>
    );
};

