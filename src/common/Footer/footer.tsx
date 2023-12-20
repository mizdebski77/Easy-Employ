import React from 'react';
import { AppTitle, AppWrapper, Logo, LogoFirstLetters, LogoText, LogoWrapper, MainSection, ToolsLink, ToolsLinksWrapper, ToolsTitle, ToolsWrapper, Wrapper } from './styledFooter';
import logo from '../Images/logo.png';
import { links } from '../links';


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
                    <AppTitle></AppTitle>
                </AppWrapper>
            </MainSection>
        </Wrapper>
    );
};

