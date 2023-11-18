import React from 'react';
import { ButtonContainer, ButtonLink, Title, TitleFirstLetters, TitleParagraph, Wrapper } from './styledHomePage';
import { motion } from 'framer-motion';
import { buttonVariant, spanVariant, titleVariants } from '../../core/animationsStore';

export const WelcomePage = () => {

    return (
        <Wrapper>
            <Title
                as={motion.h1}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
            >
                <TitleFirstLetters>E</TitleFirstLetters>asy
                <TitleFirstLetters> E</TitleFirstLetters>mploy
                <TitleParagraph
                    as={motion.p}
                    initial="hidden"
                    animate="visible"
                    variants={spanVariant}
                >
                    Your Way to Find a Job
                </TitleParagraph>
            </Title>
            <ButtonContainer
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
            >
                <ButtonLink to="/Home">Get started</ButtonLink>
            </ButtonContainer>
        </Wrapper >
    );
};