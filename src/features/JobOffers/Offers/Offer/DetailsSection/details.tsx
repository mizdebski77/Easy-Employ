import React from 'react';
import { Wrapper, MapSection, Tile, Map } from './styledDetails';
import map from '../../../../../common/Images/map.png';

export const Details = () => {
    return (
        <Wrapper>
            <div>
                <Tile>

                </Tile>
            </div>

            <MapSection>
                <Map src={map} alt='map' />
            </MapSection>
        </Wrapper>
    );
};

