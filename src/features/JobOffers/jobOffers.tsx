import React from 'react';
import { Form, FormWrapper, Input, KeyWord, KeyWordContainer, KeyWordsWrapper, Legend, RemoveButton, SearchButton, Title, Wrapper } from './styledJobOffers';

export const JobOffers = () => {
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
