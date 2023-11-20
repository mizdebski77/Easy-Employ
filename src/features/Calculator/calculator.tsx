import React from 'react';
import { Button, CheckBox, Form, FormWrapper, Input, Label, Title, Wrapper } from './styledCalculator';

export const Calculator = () => {
    return (
        <Wrapper>
            <Title>Gross Net Consumption Calculator (2023)</Title>
            <FormWrapper>
                <Form>
                    <Input placeholder='Enter your monthly salary' />
                    <Label>
                        <CheckBox type="checkbox" name="vehicle1" value="Bike" />
                        Gross
                    </Label>

                    <Label>
                        <CheckBox type="checkbox" name="vehicle1" value="Bike" />
                        Net
                    </Label>

                    <Button>Count</Button>
                </Form>
            </FormWrapper>
        </Wrapper>
    );
};

