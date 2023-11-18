import React from 'react';
import { Button, Form, FormContainer, FormTitle, FormsWrapper, Input, Title, TitleSpan, Wrapper } from './styledLogIn';

export const LogIn = () => {
    return (
        <Wrapper>
            <Title>Log in to our application
                <TitleSpan> Or </TitleSpan>
                create an account
            </Title>

            <FormsWrapper>
                <FormContainer>
                    <FormTitle>Log-In</FormTitle>
                    <Form>
                        <Input placeholder='E-Mail' type='email' />
                        <Input placeholder='Password' type='password' />
                        <Button>Log-In</Button>
                    </Form>
                </FormContainer>

                <FormContainer>
                    <FormTitle>Create an account</FormTitle>
                    <Form>
                        <Input placeholder='Name' type='name' />
                        <Input placeholder='Surname' type='name' />
                        <Input placeholder='E-Mail' type='email' />
                        <Input placeholder='Password' type='password' />
                        <Input placeholder='Reapeat password' type='password' />
                        <Button>Create an account</Button>
                    </Form>
                </FormContainer>
            </FormsWrapper>

        </Wrapper >
    );
};

