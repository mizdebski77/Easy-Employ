import React from 'react';
import { Wrapper, Tile, TileTitle, SkillsWrapper, Skill, TextWrapper, SkillLevel, TextSection } from './styledDetails';
import { OfferArray } from '../../../../../core/interface';

interface DetailsProps { data: OfferArray }

export const Details: React.FC<DetailsProps> = ({ data }) => {
    if (!data) return null;

    return (
        <Wrapper>
            <Tile>
                <TileTitle>Tech Stack Required</TileTitle>
                <SkillsWrapper>
                    {data.skills.map((skill, index) => (
                        <TextWrapper key={index}>
                            <Skill>{skill.skill}</Skill>
                            <SkillLevel level={skill.level}>{skill.level}</SkillLevel>
                        </TextWrapper>
                    ))}
                </SkillsWrapper>
            </Tile>

            <Tile>
                <TileTitle>Job Description</TileTitle>
                <TextSection>
                    <p style={{ marginBottom: 10, fontWeight: 500, color: 'inherit' }}>About the role</p>
                    We are looking for a passionate <strong>{data.position}</strong> to join our growing
                    team at <strong>{data.company_name}</strong>. You will work on exciting projects and
                    collaborate with talented developers in a supportive environment.
                    <ul>
                        <li>Design and implement scalable, maintainable solutions</li>
                        <li>Collaborate closely with product managers and designers</li>
                        <li>Participate in code reviews and technical discussions</li>
                        <li>Write unit and integration tests to ensure code quality</li>
                        <li>Contribute to architecture decisions and technical roadmap</li>
                    </ul>
                    <p style={{ marginTop: 16, marginBottom: 8, fontWeight: 500, color: 'inherit' }}>What we offer</p>
                    <ul>
                        <li>Competitive salary: {data.gross_salary}</li>
                        <li>{data.work_type} work model from {data.location}</li>
                        <li>Private healthcare, gym membership, team retreats</li>
                        <li>Annual budget for conferences and professional growth</li>
                    </ul>
                </TextSection>
            </Tile>
        </Wrapper>
    );
};
