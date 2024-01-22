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
                        <DataInput placeholder='Name' type='text' />
                        <DataInput placeholder='Surname' type='text' />
                        <DataInput placeholder='Date of birthd' type='date' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Location</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Country' />
                        <DataInput placeholder='City ' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Contact Informations</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Phone' type='number' />
                        <DataInput placeholder='E-Mail ' type='email' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>
            </FormsWrapper>


        </Wrapper>
    );
};

