import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
`;

export const Tile = styled.div`
    margin: 0 auto 80px;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
`;

export const MapSection = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
`;

export const Map = styled.img`
    width: 100%;
`;

