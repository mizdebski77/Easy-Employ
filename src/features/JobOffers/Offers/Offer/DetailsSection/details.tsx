import React from 'react';
import { Wrapper, MapSection, Tile, Map, TileTitle, SkillsWrapper, Skill, TextWrapper, SkillLevel } from './styledDetails';
import map from '../../../../../common/Images/map.png';
import { OfferArray } from '../../../../../core/interface';
interface BasicInfoProps {
    data: OfferArray
}
export const Details: React.FC<BasicInfoProps> = ({ data }) => {

    const skills = data.skills



    return (
        <Wrapper>
            <div>
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
            </div>

            <MapSection>
                <Map src={map} alt='map' />
            </MapSection>
        </Wrapper>
    );
};

