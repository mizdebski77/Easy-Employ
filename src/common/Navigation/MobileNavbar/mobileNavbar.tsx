import React from 'react';
import { ImgWrapper, NavbarLink, Wrapper, LinkImg } from './styledMobileNavbar';
import { links } from '../links';
import accountImg from '../../Images/account.svg';
import languageImg from '../../Images/language.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavbarProps {
    mobileNavigation: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileNavigation }) => {

    const mobileNavbarVariant = {
        hidden: {
            y: "-100%",
            opacity: 0,
            transition: {
                type: "tween",
            },
        },
        visible: {
            y: 0,
            opacity: 1,
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
                    <LinkImg src={accountImg} />
                    <LinkImg src={languageImg} />
                </ImgWrapper>
            </Wrapper>
        </AnimatePresence>

    );
};

export default MobileNavbar;