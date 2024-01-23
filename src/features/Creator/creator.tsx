import React from 'react';
import {
    ContentWrapper,
    DataForm,
    DataInput,
    DataTitle,
    FormWrapper,
    FormsWrapper,
    SaveButton,
    Title,
    Wrapper,
    TextArea,
    SkillsWrapper,
    Skill,
    SkillsContainer,
    RemoveSkillButton,
} from './styledCreator';
import { Forms } from './Forms/forms';
import { CvPreview } from './CvPreview/cvPreview';

export const Creator = () => {
    return (
        <Wrapper>
            <Title>CV Creator</Title>

            <ContentWrapper>

                <Forms />
                {/* 





                    <FormWrapper>

                        <DataTitle>Work experience</DataTitle>
                        <DataForm>
                            <DataInput placeholder='Position' />
                            <DataInput placeholder='Company Name ' />
                            <DataInput placeholder='Location' />
                            <DataInput placeholder='Start date' />
                            <DataInput placeholder='End date' />
                            <DataInput placeholder='Still working' />
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
                </FormsWrapper> */}

                <CvPreview />

            </ContentWrapper>
        </Wrapper>
    );
};

