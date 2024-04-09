import React from 'react';
import { CloseButton, FlagImg, FullScreenWrapper, LangCaption, LangWrapper, LanguagesWindow, Wrapper } from './styledLanguage';
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion';
import { closeWindow, closeWrapper, openWindow, openWrapper } from '../../../core/animationsStore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleLanguageWindow } from '../MobileNavbar/navigationSlice';
import { languages } from '../../../core/arrays';


export const Language = () => {

    const dispatch = useDispatch();

    const navigationState = useSelector((state: RootState) => state.navigation);
    const languageWindow = navigationState.languageWindow

    return (
        <Wrapper>
            <AnimatePresence>
                <FullScreenWrapper
                    as={motion.div}
                    initial={closeWrapper}
                    animate={languageWindow ? openWrapper : closeWrapper}
                    transition={{ duration: 0.5 }}

                >
                    <LanguagesWindow
                        as={motion.div}
                        initial={closeWindow}
                        animate={languageWindow ? openWindow : closeWindow}
                        transition={{ duration: 0.5 }}
                    >
                        {languages.map((language) => (
                            <LangWrapper>
                                <FlagImg src={language.flag} />
                                <LangCaption>{language.text}</LangCaption>
                            </LangWrapper>

                        ))}
                    </LanguagesWindow>

                    <CloseButton onClick={() => dispatch(toggleLanguageWindow())}>
                        <AiOutlineClose size={35} />
                    </CloseButton>
                </FullScreenWrapper>
            </AnimatePresence>

        </Wrapper>
    );
};

