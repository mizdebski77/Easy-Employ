import React, { useState } from 'react';
import { MenuButton, MenuWrapper, Title, Wrapper } from './styledCarrerMenu';
import Hamburger from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { carrerMenu, menuVariant } from '../../../core/animationsStore';

export const CarrerMenu = () => {
    const [menu, setMenu] = useState(false);

    const toggleMobileNavigation = () => {
        setMenu(!menu);
    };


    return (
        <Wrapper>
            <MenuButton onClick={toggleMobileNavigation}>
                <Hamburger  color='#ffff' size={28} />
            </MenuButton>
            <AnimatePresence>
                {menu && (
                    <MenuWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={menu ? "visible" : "hidden"}
                        exit="hidden"
                        variants={menuVariant}
                    >
                        <Title>Your Career</Title>
                    </MenuWrapper>
                )}
            </AnimatePresence>


        </Wrapper>
    );
};
