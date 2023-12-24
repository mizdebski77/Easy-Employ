import React, { useState } from 'react';
import { Button, CheckBox, DisclaimerText, DisclaimerTitle, DisclaimerWrapper, Form, FormWrapper, Input, Label, Result, ResultTile, ResultTitle, ResultWrapper, Title, Wrapper } from './styledCalculator';
import { motion } from 'framer-motion';

export const Calculator = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [monthlySalary, setMonthlySalary] = useState(0);
    const [title, setTitle] = useState('Gross Net Consumption Calculator (2023)')
    const [COE, setCOE] = useState(0);
    const [MC, setMC] = useState(0);
    const [CW, setCW] = useState(0);
    const [B2B, setB2B] = useState(0);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const unselectedOption = selectedOption === 'gross' ? 'net' : 'gross';
        setTitle(`${monthlySalary} zł ${selectedOption} - check how much to ${unselectedOption}`);
    };

    const socialSecurityContributions = {
        pension: monthlySalary * 0.0976,
        rent: monthlySalary * 0.015,
        sickness: monthlySalary * 0.0245,
        accident: monthlySalary * 0.077662,
        advance : monthlySalary * 0.0376,
    };


    console.log(socialSecurityContributions);


    const countCOE = () => {
        setCOE(monthlySalary * 2)
    };

    const countMC = () => {
        setMC(monthlySalary * 4)
    };

    const countCW = () => {
        setCW(monthlySalary * 6)
    };

    const countB2B = () => {
        setB2B(monthlySalary * 8)
    };

    const handleButtonCLick = () => {
        if (selectedOption) {
            countCOE();
            countMC();
            countCW();
            countB2B();
        }
    };


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
