import React, { useState } from 'react';
import { LinkImg, ImgWrapper, LinksWrapper, LogoFirstLetters, LinkImgWrapperLang, LogoImg, LogoLink, LogoText, NavbarLink, Wrapper, PhoneNavbar, LinkImgWrapper, LinkImgSpan, LanguagesWrapper } from './styledNavigation';
import logo from '../Images/logo.png';
import { links } from './links';
import accountImg from '../Images/account.svg';
import languageImg from '../Images/language.svg';
import { Divide as Hamburger } from 'hamburger-react';
import { MobileNavbar } from './MobileNavbar/mobileNavbar';
import { Language } from './Language/language';

export const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false);
    const [languageWindow, setLanguageWindow] = useState(false);

    const toggleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation);
    };

    const openLanguagWindow = () => {
        setLanguageWindow(!languageWindow);
    };

    const closeLangWindow = () => {
        setLanguageWindow(false);
    };

    return (
        <>

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
                    <LinkImgWrapper to="/Log-In">
                        <LinkImg src={accountImg} />
                        <LinkImgSpan>Account</LinkImgSpan>
                    </LinkImgWrapper>

                    <LinkImgWrapperLang onClick={openLanguagWindow}>
                        <LinkImg src={languageImg} />
                        <LinkImgSpan>English</LinkImgSpan>
                    </LinkImgWrapperLang>
                </ImgWrapper>

                <PhoneNavbar onClick={toggleMobileNavigation}>
                    <Hamburger color='#97d04a' size={28} />
                </PhoneNavbar>
            </Wrapper>
            <MobileNavbar
                mobileNavigation={mobileNavigation}
            />
            {languageWindow && (
                < Language
                    languageWindow={languageWindow}
                    closeLangWindow={closeLangWindow}
                />
            )}

        </>
    );
};

