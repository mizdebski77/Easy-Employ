import React from 'react';
import { SectionsWrapper, Wrapper } from './styledMyCarrer';
import Hamburger from 'hamburger-react';
import { Calculator } from './Sections/Calculator/calculator';

export const MyCarrer = () => {
    return (
        <Wrapper>
            <Calculator />
        </Wrapper>
    );
};

