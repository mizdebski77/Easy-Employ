import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 24px;
`;

export const TileTitle = styled.h3`
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
`;

export const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: ${({ theme }) => theme.color.bgCard2};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
`;

export const Skill = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const SkillLevel = styled.span<{ level: string }>`
    font-size: 11px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 99px;
    background: ${({ level, theme }) =>
        level === 'senior' ? theme.color.redBg :
        level === 'mid'    ? theme.color.amberBg :
        theme.color.greenBg};
    color: ${({ level, theme }) =>
        level === 'senior' ? theme.color.red :
        level === 'mid'    ? theme.color.amber :
        theme.color.green};
`;

export const TextSection = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMuted};
    line-height: 1.75;

    strong { color: ${({ theme }) => theme.color.fontSecond}; }

    ul {
        padding-left: 1.2rem;
        margin-top: 8px;
        li { margin-bottom: 6px; }
    }
`;
