import React from 'react';
import { CompanyName, Wrapper, Position, TitleWrapper, TitleImg } from './styledBasicInfo';
import { } from '../styledOffer';
import { OfferArray } from '../../../../../core/interface';
import money from '../../../../../common/Images/SVG/money.svg';
import location from '../../../../../common/Images/SVG/location.svg';
import tof from '../../../../../common/Images/SVG/tof.svg';

interface BasicInfoProps {
    data: OfferArray
}

export const BasicInfo: React.FC<BasicInfoProps> = ({ data }) => {

    if (!data) {
        return null;
    }

    const Informations = [
        { text: `${data.gross_salary}`, src: money, title: 'Gross Sallary' },
        { text: `${data.location}`, src: location, title: 'Location' },
        { text: `${data.work_type}`, src: tof, title: 'Type Of Work' },
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
        </Wrapper>
    );
};
