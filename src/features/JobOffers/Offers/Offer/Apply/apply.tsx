import React from 'react';
import { ApplyTitle, Form, Input, InputsWrapper, Wrapper } from './styledApply';

export const Apply = () => {
    return (
        <Wrapper>
            <ApplyTitle>Apply for this position</ApplyTitle>

            <Form>
                <InputsWrapper>
                    <Input />
                    <Input />
                </InputsWrapper>

            </Form>
        </Wrapper>
    );
};