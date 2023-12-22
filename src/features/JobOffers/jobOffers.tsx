import React from 'react';

import {
    Form,
    FormWrapper,
    Input,
    KeyWord,
    KeyWordContainer,
    KeyWordsWrapper,
    Legend,
    Option,
    RemoveButton,
    SearchButton,
    Select,
    Title,
    Wrapper
} from './styledJobOffers';

export const JobOffers = () => {

    const options = [
        { label: '30km', value: 30 },
        { label: '50km', value: 50 },
        { label: '100km', value: 100 },
        { label: '150km', value: 150 },
        { label: '200km', value: 200 },
    ];

    return (
        <Wrapper>
            <Title>
                Job Offers
            </Title>

            <FormWrapper>
                <Form>
                    <Input placeholder='Key Words' />
                    <Input placeholder='Loaction' />
                    <Select>
                        {options.map((option, index) => (
                            <Option key={index}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                    <SearchButton>Search</SearchButton>
                </Form>

                <KeyWordsWrapper>
                    <Legend>Key words</Legend>

                    <KeyWordContainer>
                        <KeyWord>Frontend developer</KeyWord>
                        <RemoveButton>x</RemoveButton>
                    </KeyWordContainer>

                    <KeyWordContainer>
                        <KeyWord>JS</KeyWord>
                        <RemoveButton>x</RemoveButton>
                    </KeyWordContainer>

                    <KeyWordContainer>
                        <KeyWord>React</KeyWord>
                        <RemoveButton>x</RemoveButton>
                    </KeyWordContainer>
                </KeyWordsWrapper>
            </FormWrapper>
        </Wrapper>
    );
};
