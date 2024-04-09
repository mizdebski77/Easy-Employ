import { LinkImg, ImgWrapper, LinksWrapper, LogoFirstLetters, LinkImgWrapperLang, LogoImg, LogoLink, LogoText, NavbarLink, Wrapper, PhoneNavbar, LinkImgWrapper, LinkImgSpan } from './styledNavigation';
import logo from '../Images/logo.png';
import accountImg from '../Images/SVG/account.svg';
import languageImg from '../Images/SVG/language.svg';
import { Divide as Hamburger } from 'hamburger-react';
import { MobileNavbar } from './MobileNavbar/mobileNavbar';
import { Language } from './Language/language';
import { scrollTop } from '../../core/scrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { toggleLanguageWindow, toggleMobileNavigation } from './MobileNavbar/navigationSlice';
import { links } from '../../core/arrays';

export const Navigation = () => {

    const navigationState = useSelector((state: RootState) => state.navigation);
    const dispatch = useDispatch();
    const languageWindow = navigationState.languageWindow

    return (
        <>
            <Wrapper>
                <LogoLink to='/Home'>
                    <LogoImg src={logo} onClick={() => scrollTop()} />
                    <LogoText>
                        <LogoFirstLetters>E</LogoFirstLetters>asy
                        <LogoFirstLetters> E</LogoFirstLetters>mploy
                    </LogoText>
                </LogoLink>

                <LinksWrapper>
                    {links.map((link, index) => (
                        <NavbarLink key={index} to={link.link} onClick={() => scrollTop()}>
                            {link.text}
                        </NavbarLink>
                    ))}
                </LinksWrapper>

                <ImgWrapper>
                    <LinkImgWrapper to="/Log-In">
                        <LinkImg src={accountImg} />
                        <LinkImgSpan>Account</LinkImgSpan>
                    </LinkImgWrapper>

                    <LinkImgWrapperLang onClick={() => dispatch(toggleLanguageWindow())}>
                        <LinkImg src={languageImg} />
                        <LinkImgSpan>English</LinkImgSpan>
                    </LinkImgWrapperLang>
                </ImgWrapper>

                <PhoneNavbar onClick={() => dispatch(toggleMobileNavigation())}>
                    <Hamburger color='#0096ff' size={24} />
                </PhoneNavbar>
            </Wrapper>
            <MobileNavbar />
            {languageWindow && (
                < Language />
            )}

        </>
    );
};

