import React from 'react';
import { ApplyButton, ApplyTitle, Form, Input, InputContainer, LabelWrapper, Label, Wrapper } from './styledApply';

export const Apply = () => {
    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form>
                <LabelWrapper>
                    <InputContainer>
                        <Label>Name & Surname</Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>E-Mail</Label>
                        <Input />
                    </InputContainer>
                </LabelWrapper>

                <LabelWrapper>
                    <InputContainer>
                        <Label>GitHub / Porfolio Link</Label>
                        <Input />
                    </InputContainer>

                    <InputContainer>
                        <Label>Linkedin</Label>
                        <Input />
                    </InputContainer>
                </LabelWrapper>

                <LabelWrapper>
                    <InputContainer>
                        <Label>File Upload</Label>
                        <Input type='file' />
                    </InputContainer>
                </LabelWrapper>

                <ApplyButton>Apply</ApplyButton>

            </Form>
        </Wrapper>
    );
};