import React, { useState } from 'react';
import {
    Button,
    CheckBox,
    DisclaimerText,
    DisclaimerTitle,
    DisclaimerWrapper,
    Form,
    FormWrapper,
    Input,
    Label,
    Result,
    ResultTile,
    ResultTitle,
    ResultWrapper,
    Title,
    Wrapper
} from './styledCalculator';

export const Calculator = () => {

    return (
        <Wrapper>
            <Title>
                {title}
            </Title>

            <FormWrapper>
                <Form onSubmit={handleFormSubmit}>
                    <Input
                        placeholder='Enter your monthly salary (PLN)'
                        type='number'
                        min={0}
                        required
                        onChange={({ target }) => setMonthlySalary(parseFloat(target.value))}
                    />
                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="gross"
                            checked={selectedOption === 'gross'}
                            onChange={({ target }) => setSelectedOption((target.value))}
                            required
                        />
                        Gross
                    </Label>

                    <Label>
                        <CheckBox
                            type="radio"
                            name="calculationOption"
                            value="net"
                            checked={selectedOption === 'net'}
                            onChange={({ target }) => setSelectedOption((target.value))}
                            required
                        />
                        Net
                    </Label>
                    <Button onClick={() => handleButtonCLick()}>Count</Button>
                </Form>
            </FormWrapper>

            <ResultWrapper>
                <ResultTile>
                    <ResultTitle>Contract of employment</ResultTitle>
                    <Result>{COE} zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>Mandatory contract</ResultTitle>
                    <Result>{MC} zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>Contract work</ResultTitle>
                    <Result>{CW} zł</Result>
                </ResultTile>
                <ResultTile>
                    <ResultTitle>B2B Contract</ResultTitle>
                    <Result>{B2B} zł</Result>
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
