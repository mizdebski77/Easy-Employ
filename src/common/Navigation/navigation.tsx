import React, { useState } from 'react';
import { LinkImg, ImgWrapper, LinksWrapper, LogoFirstLetters, LogoImg, LogoLink, LogoText, NavbarLink, Wrapper, PhoneNavbar } from './styledNavigation';
import logo from '../Images/logo.png';
import { links } from './links';
import accountImg from '../Images/account.svg';
import languageImg from '../Images/language.svg';
import { Divide as Hamburger } from 'hamburger-react';
import MobileNavbar from './MobileNavbar/mobileNavbar';

export const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false);

    const toggleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation);
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
                    <LinkImg src={accountImg} />
                    <LinkImg src={languageImg} />
                </ImgWrapper>


                <PhoneNavbar onClick={toggleMobileNavigation}>
                    <Hamburger color='#97d04a' size={28} />
                </PhoneNavbar>
            </Wrapper>
            {mobileNavigation && (
                <MobileNavbar
                    mobileNavigation={mobileNavigation}
                />

            )}
        </>
    );
};

