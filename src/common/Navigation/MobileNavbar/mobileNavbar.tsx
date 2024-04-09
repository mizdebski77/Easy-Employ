import { ImgWrapper, NavbarLink, Wrapper, Img, LinkImg } from './styledMobileNavbar';
import accountImg from '../../Images/SVG/account.svg';
import languageImg from '../../Images/SVG/language.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleMobileNavigation } from './navigationSlice';
import { links } from '../../../core/arrays';

export const MobileNavbar = () => {

    const dispatch = useDispatch();

    const navigationState = useSelector((state: RootState) => state.navigation);
    const mobileNavigation = navigationState.mobileNavigation


    const mobileNavbarVariant = {
        hidden: {
            x: "-100%",
        },
        visible: {
            x: 0,
            transition: {
                type: "tween",
            },
        },
    };

    return (
        <AnimatePresence>
            <Wrapper
                as={motion.div}
                initial="hidden"
                animate={mobileNavigation ? "visible" : "hidden"}
                exit="hidden"
                variants={mobileNavbarVariant}
            >
                {links.map((link, index) => (
                    <NavbarLink key={index} to={link.link} onClick={() => dispatch(toggleMobileNavigation())}>
                        {link.text}
                    </NavbarLink>
                ))}
                <ImgWrapper>
                    <LinkImg to="/Log-In">
                        <Img src={accountImg} />
                    </LinkImg>
                    <Img src={languageImg} />

                </ImgWrapper>
            </Wrapper>
        </AnimatePresence>
    );
};
