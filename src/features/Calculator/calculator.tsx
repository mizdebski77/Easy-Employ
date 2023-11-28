import React, { useState } from 'react';
import { Button, CheckBox, DisclaimerText, DisclaimerTitle, DisclaimerWrapper, Form, FormWrapper, Input, Label, Result, ResultTile, ResultTitle, ResultWrapper, Title, Wrapper } from './styledCalculator';
import { motion } from 'framer-motion';
import { spanVariant, titleVariants, bottomVariant, formVariant } from '../../core/animationsStore';

export const Calculator = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [monthlySalary, setMonthlySalary] = useState<string | number>('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Monthly Salary:', monthlySalary);
        console.log('Selected Option:', selectedOption);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <Wrapper>
            <Title
                as={motion.h1}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
            >
                Gross Net Consumption Calculator (2023)
            </Title>

            <FormWrapper
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={spanVariant}
            >
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
                            onChange={handleOptionChange}
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
                            onChange={handleOptionChange}
                            required
                        />
                        Net
                    </Label>
                    <Button>Count</Button>
                </Form>
            </FormWrapper>

            <ResultWrapper
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={bottomVariant}
            >
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

            <DisclaimerWrapper
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={formVariant}
            >
                <DisclaimerTitle>Disclaimer</DisclaimerTitle>
                <DisclaimerText>
                    "The final calculation result is consistent with Polish standards for determining remuneration, taking into account contracts and applicable taxes. This information constitutes a declaration to ensure transparency on our website."
                </DisclaimerText>
            </DisclaimerWrapper>

        </Wrapper >
    );
};
