import React from 'react';
import { LinkImg, ImgWrapper, LinksWrapper, LogoFirstLetters, LogoImg, LogoLink, LogoText, NavbarLink, Wrapper } from './styledNavigation';
import logo from '../Images/logo.png';
import { links } from './links';
import accountImg from '../Images/account.svg';
import languageImg from '../Images/language.svg';
export const Navigation = () => {

    return (
        <Wrapper>
            <LogoLink to='/Home'>
                <LogoImg src={logo} />
                <LogoText>
                    <LogoFirstLetters>E</LogoFirstLetters>asy
                    <LogoFirstLetters> E</LogoFirstLetters>mploy
                </LogoText>
            </LogoLink>

            <LinksWrapper>
                {links.map((link, index) => (
                    <NavbarLink key={index} to={link.link}>
                        {link.text}
                    </NavbarLink>
                ))}
            </LinksWrapper>

            <ImgWrapper>
                <LinkImg src={accountImg} />
                <LinkImg src={languageImg} />
            </ImgWrapper>
        </Wrapper>
    );
};

