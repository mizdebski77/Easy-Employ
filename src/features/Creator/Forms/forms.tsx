import React from 'react';
import { CloseButton, DataForm, DataTitle, FormWrapper, FormsWrapper, NextButton, SaveButton, TitleWrapper, Wrapper } from './styledForms';
import { DataInput } from '../styledCreator';

export const Forms = () => {
    return (
        <Wrapper>
            <FormsWrapper>
                <FormWrapper>
                    <TitleWrapper>
                        <DataTitle>Basic information</DataTitle>
                        <CloseButton>close</CloseButton>
                    </TitleWrapper>
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

            <NextButton>
                Next
            </NextButton>


        </Wrapper>
    );
};

