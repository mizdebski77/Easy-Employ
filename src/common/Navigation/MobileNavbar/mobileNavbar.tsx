import React from 'react';
import { ImgWrapper, NavbarLink, Wrapper, Img, LinkImg } from './styledMobileNavbar';
import { links } from '../links';
import accountImg from '../../Images/account.svg';
import languageImg from '../../Images/language.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavbarProps {
    mobileNavigation: boolean;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileNavigation }) => {

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
                    <NavbarLink key={index} to={link.link}>
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
