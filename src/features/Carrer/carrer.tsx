import React from 'react';
import { MainWrapper, Photo, PhotoSection, Title, Wrapper } from './styledCarrer';
import profile from '../../common/Images/profileStack.png';

export const Carrer = () => {
    return (
        <Wrapper>
            <Title> My Career</Title>

            <MainWrapper>
                <PhotoSection>
                    <Photo src={profile} />
                </PhotoSection>
            </MainWrapper>
        </Wrapper>
    );
};

