import React from 'react';
import { DataForm, DataTitle, FormWrapper, SaveButton, Wrapper } from './styledCvPreview';
import { DataInput } from '../styledCreator';

export const CvPreview = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <DataTitle>Basic information</DataTitle>
                <DataForm>
                    <DataInput placeholder='Name' />
                    <DataInput placeholder='Surname ' />
                    <DataInput placeholder='Date of birthd' />
                    <SaveButton>+ Save</SaveButton>
                </DataForm>
            </FormWrapper>

        </Wrapper>
    );
};

