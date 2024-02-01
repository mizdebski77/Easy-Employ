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

export const TileTitle = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    width: 100%;
`;

export const SkillsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    display: grid;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    padding: 10px 20px;
    border-radius: 20px;
    gap: 4px;
`;

export const Skill = styled.span`
    font-size: 18px;
`;

export const SkillLevel = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    font-size: 16px;
`;

export const MapSection = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
`;

export const Map = styled.img`
    width: 100%;
`;

