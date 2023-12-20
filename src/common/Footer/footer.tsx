import React from 'react';
import { AppImg, AppTitle, AppWrapper, IformationsWrapper, InformationLink, InformationsLinksWrapper, Logo, LogoFirstLetters, LogoText, LogoWrapper, MainSection, ToolsLink, ToolsLinksWrapper, ToolsTitle, ToolsWrapper, Wrapper } from './styledFooter';
import logo from '../Images/logo.png';
import { links } from '../links';
import app from '../Images/appSection/app.png';
import google from '../Images/appSection/google.png';
import link from '../Images/SocialMedia/link.png';
import fb from '../Images/SocialMedia/fb.png';
import insta from '../Images/SocialMedia/ig.png';


export const Footer = () => {
    return (
        <Wrapper>

            <MainSection>
                <LogoWrapper to='/Home'>
                    <Logo src={logo} />
                    <LogoText>
                        <LogoFirstLetters>E</LogoFirstLetters>asy
                        <LogoFirstLetters> E</LogoFirstLetters>mploy
                    </LogoText>
                </LogoWrapper>

                <ToolsWrapper>
                    <ToolsTitle>Tools</ToolsTitle>
                    <ToolsLinksWrapper>
                        {links.map((link, index) => (
                            <ToolsLink key={index} to={link.link}>{link.text}</ToolsLink>
                        ))}
                    </ToolsLinksWrapper>
                </ToolsWrapper>

                <AppWrapper>
                    <AppTitle>Download the app</AppTitle>
                    <AppImg src={app} />
                    <AppImg src={google} />
                </AppWrapper>
            </MainSection>

            <IformationsWrapper>
                <InformationsLinksWrapper>
                    <InformationLink>Easy Employ Group</InformationLink>
                    <InformationLink>Statute</InformationLink>
                    <InformationLink>Privacy policy</InformationLink>
                    <InformationLink>Cookie policy</InformationLink>
                </InformationsLinksWrapper>
            </IformationsWrapper>
        </Wrapper>
    );
};

