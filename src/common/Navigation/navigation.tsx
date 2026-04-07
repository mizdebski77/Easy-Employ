import { LogoDot, ImgWrapper, LinksWrapper, LogoFirstLetters, LinkImgWrapperLang, LogoText, LogoLink, NavbarLink, Wrapper, PhoneNavbar, LinkImgWrapper, LinkImgSpan, LinkImgWrapperLangSpan } from './styledNavigation';
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
    const languageWindow = navigationState.languageWindow;

    return (
        <>
            <Wrapper>
                <LogoLink to='/Home' onClick={() => scrollTop()}>
                    <LogoDot />
                    <LogoText>
                        <LogoFirstLetters>Easy</LogoFirstLetters> Employ
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
                        <LinkImgSpan>Sign In</LinkImgSpan>
                    </LinkImgWrapper>

                    <LinkImgWrapperLang onClick={() => dispatch(toggleLanguageWindow())}>
                        <LinkImgWrapperLangSpan>🌐 EN</LinkImgWrapperLangSpan>
                    </LinkImgWrapperLang>
                </ImgWrapper>

                <PhoneNavbar onClick={() => dispatch(toggleMobileNavigation())}>
                    <Hamburger color='#4f8ef7' size={22} />
                </PhoneNavbar>
            </Wrapper>
            <MobileNavbar />
            {languageWindow && <Language />}
        </>
    );
};
