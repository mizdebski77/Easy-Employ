import React from 'react';
import {
    CurrentInput,
    CurrentSpan,
    CurrentWrapper,
    DataForm,
    DataInput,
    DataTitle,
    FormWrapper,
    FormsWrapper,
    RemoveSkillButton,
    SaveButton,
    Skill,
    SkillsContainer,
    SkillsWrapper,
    TextArea,
    Wrapper
} from './styledForms';

export const Forms = () => {
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

                <FormWrapper>

                    <DataTitle>Work experience</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Position' type='text' />
                        <DataInput placeholder='Company Name ' type='text' />
                        <DataInput placeholder='Location' type='text' />
                        <DataInput placeholder='Start date' type='date' />
                        <DataInput placeholder='End date' type='date' />
                        <CurrentWrapper>
                            <CurrentInput placeholder='Still working' type='checkbox' />
                            <CurrentSpan>Still working</CurrentSpan>
                        </CurrentWrapper>
                        <TextArea placeholder='Description'></TextArea>
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Skillset</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Skill' />
                        <SaveButton>+ Add skill</SaveButton>

                        <SkillsWrapper>
                            <SkillsContainer>
                                <Skill>React</Skill>
                                <RemoveSkillButton>x</RemoveSkillButton>
                            </SkillsContainer>

                            <SkillsContainer>
                                <Skill>React</Skill>
                                <RemoveSkillButton>x</RemoveSkillButton>
                            </SkillsContainer>
                        </SkillsWrapper>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Education</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Level of education' />
                        <DataInput placeholder='School Name' />
                        <DataInput placeholder='Field ' />
                        <DataInput placeholder='Start date' />
                        <DataInput placeholder='End date' />
                        <DataInput placeholder='Still Learning' />
                        <TextArea placeholder='Description'></TextArea>
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Courses</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Course Name' />
                        <DataInput placeholder='Organizer' />
                        <DataInput placeholder='Start date' />
                        <DataInput placeholder='End date' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Languages</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Languagesn' />
                        <DataInput placeholder='Level' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Interests</DataTitle>
                    <DataForm>
                        <TextArea placeholder='Description'></TextArea>
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Links</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Adress' />
                        <DataInput placeholder='Description' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>
            </FormsWrapper>

        </Wrapper >
    );
};

