import React from 'react';
import { DataForm, DataTitle, FormWrapper, FormsWrapper, SaveButton, Wrapper } from './styledCvPreview';
import { DataInput } from '../styledCreator';

export const CvPreview = () => {
    return (
        <Wrapper>
            <FormsWrapper>
                <FormWrapper>
                    <DataTitle>Basic information</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Name' />
                        <DataInput placeholder='Surname ' />
                        <DataInput placeholder='Date of birthd' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>
            </FormsWrapper>


        </Wrapper>
    );
};

