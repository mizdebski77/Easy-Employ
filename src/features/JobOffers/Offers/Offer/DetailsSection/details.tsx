import React from 'react';
import { Wrapper, MapSection, Tile, Map, TileTitle, SkillsWrapper, Skill, TextWrapper, SkillLevel } from './styledDetails';
import map from '../../../../../common/Images/map.png';

export const Details = () => {
    return (
        <Wrapper>
            <div>
                <Tile>
                    <TileTitle>Tech Stack</TileTitle>
                    <SkillsWrapper>
                        <TextWrapper>
                            <Skill>React</Skill>
                            <SkillLevel>Mid</SkillLevel>
                        </TextWrapper>
                    </SkillsWrapper>
                </Tile>
            </div>

            <MapSection>
                <Map src={map} alt='map' />
            </MapSection>
        </Wrapper>
    );
};

