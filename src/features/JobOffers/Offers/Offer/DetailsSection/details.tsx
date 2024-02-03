import React from 'react';
import {
    Wrapper,
    Tile,
    TileTitle,
    SkillsWrapper,
    Skill,
    TextWrapper,
    SkillLevel,
    TextSection
} from './styledDetails';
import { OfferArray } from '../../../../../core/interface';
interface BasicInfoProps {
    data: OfferArray
}
export const Details: React.FC<BasicInfoProps> = ({ data }) => {

    const skills = data.skills

    return (
        <Wrapper>
            <Tile>
                <TileTitle>Tech Stack</TileTitle>
                <SkillsWrapper>
                    {skills.map((skill, index) => (
                        <TextWrapper key={index}>
                            <Skill>{skill.skill}</Skill>
                            <SkillLevel>{skill.level}</SkillLevel>
                        </TextWrapper>
                    ))}
                </SkillsWrapper>
            </Tile>

            <Tile>
                <TileTitle>Job description</TileTitle>
                <TextSection>
                    <p>
                        Tasks:
                    </p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos culpa quaerat dicta optio earum ex vitae consectetur, quo quae at voluptate, saepe ducimus vel alias in doloremque dignissimos iste soluta.

                </TextSection>
            </Tile>
        </Wrapper>
    );
};

