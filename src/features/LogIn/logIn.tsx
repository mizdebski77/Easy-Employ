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
                        <Input placeholder='E-Mail' type='email' required />
                        <Input placeholder='Password' type='password' required />
                        <Button>Log-In</Button>
                    </Form>
                </FormContainer>

                <FormContainer>
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

