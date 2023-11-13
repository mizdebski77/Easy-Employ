import React from 'react';
import { ButtonContainer, ButtonLink, Title, TitleFirstLetters, TitleParagraph, Wrapper } from './styledHomePage';
import { motion } from 'framer-motion';

export const WelcomePage = () => {

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.6,
            },
        },
    };

    const spanVariant = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                duration: 0.6,
            },
        },
    };

    const buttonVariant = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.6,
            },
        },
    };



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