import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 54px;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.4s ease forwards;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        padding: 24px 16px;
    }
`;

export const Title = styled.h1`
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 24px;
`;

export const ProfileHeader = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 28px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Avatar = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    flex-shrink: 0;
`;

export const Photo = styled.img`display: none;`;

export const PhotoSection = styled.div``;

export const Name = styled.h2`
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 3px;
`;

export const TitleSpan = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: 500;
`;

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 3px;
`;

export const LocationImg = styled.img`display: none;`;

export const LocationSpan = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};

    &::before { content: '📍 '; }
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        margin-left: 0;
    }
`;

export const EditButton = styled.button`
    padding: 8px 18px;
    border: 1px solid ${({ theme }) => theme.color.borderMid};
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.color.fontMuted};
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.color.fontMain};
        color: ${({ theme }) => theme.color.fontMain};
    }
`;

export const DeleteButton = styled.button`
    padding: 8px 14px;
    border: 1px solid ${({ theme }) => theme.color.redBg};
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.color.red};
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: 0.2s;
    opacity: 0.7;

    &:hover { opacity: 1; }
`;

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
        grid-template-columns: 1fr;
    }
`;

export const Section = styled.div`
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 18px;
    padding: 22px;
    margin-bottom: 16px;
`;

export const SectionTitle = styled.h3`
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AddButton = styled.button`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    padding: 2px 8px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover { background: ${({ theme }) => theme.color.accentGlow}; }
`;

export const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
`;

export const ContentWrapper = styled.div`flex: 1;`;

export const TileTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 2px;
`;

export const TileSecondTitle = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: 500;
`;

export const ExperienceDate = styled.span`
    font-size: 11px;
    color: ${({ theme }) => theme.color.fontSubtle};
    font-weight: 400;
`;

export const TileDescription = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
    margin-top: 6px;
    line-height: 1.5;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 6px;
    flex-shrink: 0;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

export const Skill = styled.span`
    padding: 4px 12px;
    background: rgba(79,142,247,0.1);
    border: 1px solid rgba(79,142,247,0.2);
    border-radius: 99px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const RemoveSkillButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.red};
    cursor: pointer;
    font-size: 12px;
    padding: 0 4px;
    opacity: 0.6;
    transition: 0.2s;

    &:hover { opacity: 1; }
`;

export const Input = styled.input`
    background: ${({ theme }) => theme.color.bgCard2};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.color.fontSecond};
    outline: none;
    transition: 0.2s;
    flex: 1;

    &:focus {
        border-color: ${({ theme }) => theme.color.fontMain};
    }

    &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const SkillsForm = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
`;

export const SkillsWrapper = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 10px;
    padding: 14px;
`;

export const Legend = styled.legend`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontSubtle};
    padding: 0 6px;
`;

export const Degree = styled.span`
    font-size: 11px;
    background: ${({ theme }) => theme.color.amberBg};
    color: ${({ theme }) => theme.color.amber};
    padding: 2px 8px;
    border-radius: 99px;
    display: inline-block;
    margin-top: 4px;
`;

export const EnglishLevel = styled.span`
    color: ${({ theme }) => theme.color.green};
    font-weight: 600;
`;

export const Hobbies = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMuted};
    line-height: 1.6;
`;

export const LinkToWebsite = styled.a`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontMain};
    text-decoration: none;

    &:hover { text-decoration: underline; }
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ContactItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: ${({ theme }) => theme.color.bgCard2};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
`;

export const ContactSpan = styled.span`
    font-size: 11px;
    color: ${({ theme }) => theme.color.fontSubtle};
    min-width: 52px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

export const ContactInformation = styled.span`
    font-size: 13px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 4px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    opacity: 0.4;
    cursor: pointer;
    filter: brightness(3);
    transition: 0.2s;

    &:hover { opacity: 0.8; }
`;

export const InformationWrapper = styled.div``;

// Unused below — kept for compatibility
export const FullScreenWrapper = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 200;
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderSubtle};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.color.fontSecond};
    transition: 0.2s;

    &:hover { border-color: ${({ theme }) => theme.color.borderMid}; }
`;
