import React from 'react';
import { CompanyName, InformationSpan, InformationTitle, InformationsWrapper, InfomrationsContainer, Position, TextWrapper, TitleImg, TitleWrapper, Wrapper } from './styledBasicInfo';
import { OfferArray } from '../../../../../core/interface';

interface BasicInfoProps { data: OfferArray }

export const BasicInfo: React.FC<BasicInfoProps> = ({ data }) => {
    if (!data) return null;

    const informations = [
        { title: 'Gross Salary', value: data.gross_salary },
        { title: 'Location',     value: data.location },
        { title: 'Work Mode',    value: data.work_type },
    ];

    return (
        <Wrapper>
            <TitleWrapper>
                <TitleImg src={data.logo} alt='logo' />
                <div>
                    <Position>{data.position}</Position>
                    <CompanyName>{data.company_name}</CompanyName>
                </div>
            </TitleWrapper>

            <InformationsWrapper>
                {informations.map((info, i) => (
                    <InfomrationsContainer key={i}>
                        <TextWrapper>
                            <InformationTitle>{info.title}</InformationTitle>
                            <InformationSpan style={info.title === 'Gross Salary' ? { color: '#22d3a0' } : {}}>
                                {info.value}
                            </InformationSpan>
                        </TextWrapper>
                    </InfomrationsContainer>
                ))}
            </InformationsWrapper>
        </Wrapper>
    );
};
