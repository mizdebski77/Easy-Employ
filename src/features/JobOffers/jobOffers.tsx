import React from 'react';
import { Form, FormWrapper, Input, KeyWord, KeyWordsWrapper, Legend, SearchButton, Title, Wrapper } from './styledJobOffers';

const JobOffers = () => {
    return (
        <Wrapper>
            <Title>
                Job Offers
            </Title>

            <FormWrapper>
                <Form>
                    <Input
                        placeholder='Loaction'
                    />
                    <Input
                        placeholder='Loaction'
                    />
                    <Input
                        placeholder='Loaction'
                    />

                    <SearchButton>Search</SearchButton>
                </Form>

                <KeyWordsWrapper>
                    <Legend>Key words</Legend>
                    <KeyWord>Frontend developer</KeyWord>
                </KeyWordsWrapper>
            </FormWrapper>

        </Wrapper>
    );
};

export default JobOffers;