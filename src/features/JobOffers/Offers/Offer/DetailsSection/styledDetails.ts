import { styled } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    gap: 40px;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 8px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 28px 20px;
    };
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

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
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
    padding: 4px 32px;
    border-radius: 8px;
    gap: 4px;
    justify-content: center;
    text-align: center;
    
`;

export const Skill = styled.span`
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const SkillLevel = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;

export const TextSection = styled.div`
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 10px;
    };
`;
