import React, { useState } from 'react';
import { Button, CheckBox, DisclaimerText, DisclaimerTitle, DisclaimerWrapper, Form, FormWrapper, Input, Label, Result, ResultTile, ResultTitle, ResultWrapper, Title, Wrapper } from './styledCalculator';

export const Calculator = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
        <Wrapper>
            <Title>Gross Net Consumption Calculator (2023)</Title>
            <FormWrapper>
                <Form>
                    <Input placeholder='Enter your monthly salary' type='number' min={0} />
                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="gross"
                            checked={selectedOption === 'gross'}
                            onChange={handleOptionChange}
                        />
                        Gross
                    </Label>

                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="net"
                            checked={selectedOption === 'net'}
                            onChange={handleOptionChange}
                        />
                        Net
                    </Label>
                    <Button>Count</Button>
                </Form>
            </FormWrapper>

            <ResultWrapper>
                <ResultTile>
                    <ResultTitle>Contract of employment</ResultTitle>
                    <Result>3200zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>Mandatory contract</ResultTitle>
                    <Result>3200zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>Contract work</ResultTitle>
                    <Result>3200zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>B2B Contract</ResultTitle>
                    <Result>3200zł</Result>
                </ResultTile>
            </ResultWrapper>

            <DisclaimerWrapper>
                <DisclaimerTitle>Disclaimer</DisclaimerTitle>
                <DisclaimerText>
                    "The final calculation result is consistent with Polish standards for determining remuneration, taking into account contracts and applicable taxes. This information constitutes a declaration to ensure transparency on our website."
                </DisclaimerText>
            </DisclaimerWrapper>

        </Wrapper >
    );
};

