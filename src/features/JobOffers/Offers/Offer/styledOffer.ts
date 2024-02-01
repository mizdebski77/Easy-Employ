import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    padding: 40px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
`;

export const TilesWrapper = styled.div`
    display: grid;
    gap: 40px;
`;

export const MapSection = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
`;

export const Map = styled.img`
    width: 100%;
`;


