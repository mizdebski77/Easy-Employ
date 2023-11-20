import React from 'react';
import { CloseButton, FlagImg, FullScreenWrapper, LangCaption, LangWrapper, LanguagesWindow, Wrapper } from './styledLanguage';
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion';
import { languages } from './languagesData';
import { closeWindow, closeWrapper, openWindow, openWrapper } from '../../../core/animationsStore';

interface CloseLangWindow {
    languageWindow: boolean;
    closeLangWindow: () => void;
};

export const Language: React.FC<CloseLangWindow> = ({ closeLangWindow, languageWindow }) => {

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

                    <CloseButton onClick={closeLangWindow}>
                        <AiOutlineClose size={35} />
                    </CloseButton>
                </FullScreenWrapper>
            </AnimatePresence>

        </Wrapper>
    );
};

