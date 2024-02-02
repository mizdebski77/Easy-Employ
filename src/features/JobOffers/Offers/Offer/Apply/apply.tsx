import React from 'react';
import { ApplyTitle, Form, Input, InputContainer, InputsWrapper, Label, Wrapper } from './styledApply';

export const Apply = () => {
    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form>
                <InputsWrapper>
                    <InputContainer>
                        <Label>Name & Surname</Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>E-Mail</Label>
                        <Input />
                    </InputContainer>
                </InputsWrapper>

                <InputsWrapper>
                    <InputContainer>
                        <Label>GitHub / Porfolio Link</Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>Linkedin</Label>
                        <Input />
                    </InputContainer>
                </InputsWrapper>

            </Form>
        </Wrapper>
    );
};