import React from 'react';
import { Button, Form, FormContainer, FormTitle, FormsWrapper, Input, Title, TitleSpan, Wrapper } from './styledLogIn';
import { motion } from 'framer-motion';
import { formVariant, titleVariants } from '../../core/animationsStore';

export const LogIn = () => {

    return (
        <Wrapper>
            <Title
                as={motion.h1}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
            >Log in to our application
                <TitleSpan> Or </TitleSpan>
                create an account
            </Title>

            <FormsWrapper>
                <FormContainer
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    variants={formVariant}
                >
                    <FormTitle>Log-In</FormTitle>
                    <Form>
                        <Input placeholder='E-Mail' type='email' required />
                        <Input placeholder='Password' type='password' required />
                        <Button>Log-In</Button>
                    </Form>
                </FormContainer>



                <FormContainer
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    variants={formVariant}
                >
                    <FormTitle>Create an account</FormTitle>
                    <Form>
                        <Input placeholder='Name' type='name' required />
                        <Input placeholder='Surname' type='name' required />
                        <Input placeholder='E-Mail' type='email' required />
                        <Input placeholder='Password' type='password' required />
                        <Input placeholder='Reapeat password' type='password' required />
                        <Button>Create an account</Button>
                    </Form>
                </FormContainer>
            </FormsWrapper>

        </Wrapper >
    );
};
