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
                        <DataInput placeholder='Skill' type='text' />
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
                        <DataInput placeholder='School Name' type='text' />
                        <DataInput placeholder='Field ' />
                        <DataInput placeholder='Start date' type='date' />
                        <DataInput placeholder='End date' type='date' />
                        <CurrentWrapper>
                            <CurrentInput placeholder='Still working' type='checkbox' />
                            <CurrentSpan>Still learning</CurrentSpan>
                        </CurrentWrapper>
                        <TextArea placeholder='Description'></TextArea>
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Courses</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Course Name' type='text' />
                        <DataInput placeholder='Organizer' type='text' />
                        <DataInput placeholder='Start date' type='date' />
                        <DataInput placeholder='End date' type='date' />
                        <CurrentWrapper>
                            <CurrentInput placeholder='Still working' type='checkbox' />
                            <CurrentSpan>Still learning</CurrentSpan>
                        </CurrentWrapper>
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>

                <FormWrapper>
                    <DataTitle>Languages</DataTitle>
                    <DataForm>
                        <DataInput placeholder='Languages' type='text' />
                        <DataInput placeholder='Level'  />
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
                        <DataInput placeholder='Adress' type='text' />
                        <DataInput placeholder='Description' type='text' />
                        <SaveButton>+ Save</SaveButton>
                    </DataForm>
                </FormWrapper>
            </FormsWrapper>

        </Wrapper >
    );
};

