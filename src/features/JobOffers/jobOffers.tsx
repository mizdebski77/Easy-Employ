import React from 'react';
import { Form, FormWrapper, Input, SearchButton, Title, Wrapper } from './styledJobOffers';

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
            </FormWrapper>

        </Wrapper>
    );
};

export default JobOffers;