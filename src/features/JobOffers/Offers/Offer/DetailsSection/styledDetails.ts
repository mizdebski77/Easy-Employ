import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
`;

export const Tile = styled.div`
    margin: 0 auto 52px;
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
`;

export const TileTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    width: 100%;
    text-align: center;
    margin: 0;
    font-weight: normal;
    padding: 0 0 20px 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
`;

export const SkillsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
`;

export const TextWrapper = styled.div`
    display: grid;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    padding: 6px 20px;
    border-radius: 20px;
    gap: 4px;
    min-width: 120px;
    justify-content: center;
    text-align: center;
`;

export const Skill = styled.span`
    font-size: 18px;
`;

export const SkillLevel = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    font-size: 16px;
`;

export const TextSection = styled.div`
    padding:20px;
`;

export const MapSection = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
`;

export const Map = styled.img`
    width: 100%;
`;

