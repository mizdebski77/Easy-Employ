import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 12px;
    };
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 36px;
    };
`;

export const InformationWrapper = styled.main`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        gap: 20px;
        padding: 20px 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
    };
`;

export const PhotoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 240px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Name = styled.h1`
    font-size: 32px;
    font-weight: normal;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 28px;    
    };
`;

export const ContentWrapper = styled.div`
    display: grid;
    justify-content: start;
    align-items: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        gap: 10px;
        justify-content: center;
    };
`;

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LocationImg = styled.img`
    max-width: 28px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 20px;
    };
`;

export const LocationSpan = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 18px;    
    };
`;

export const TitleSpan = styled.span`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
       font-size: 16px;
       text-align: center;
    };
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const EditButton = styled.button`
    color: ${({ theme }) => theme.color.secondColor};
    background: ${({ theme }) => theme.color.fontMain};
    padding: 8px 40px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    max-width: 160px;
    
    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
        padding: 8px 20px;
    };
`;

export const SectionTitle = styled.h2`
    margin-top: 64px;
    text-align: center;
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        margin-top: 36px;
    };
`;

export const ContactWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 40px;
    display:  flex;
    justify-content: space-between;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        flex-direction: column;
        gap: 20px;
        max-width: 500px;
        padding: 20px;
        align-items: center;
    };
    
`;

export const ContactItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        justify-content: center;
    };
`;

export const ContactSpan = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const ContactInformation = styled.span`

`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        justify-content: space-evenly;
    };
`;

export const Icon = styled.img`
    max-width: 40px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 32px;
    };
`;

export const ElementWrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    display: grid;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        padding: 20px 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px;
    };
`;

export const Tile = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        flex-direction: column;
        padding: 20px 0px;
    };
`;

export const TileTitle = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const ExperienceDate = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 14px;
    };
`;

export const TileSecondTitle = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const TileDescription = styled.span`
    max-width: 500px;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 320px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const DeleteButton = styled.button`
    color: ${({ theme }) => theme.color.secondColor};
    background: #ca0000;
    padding: 8px 40px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #f40000;
    };

    &:active {
        background: #ff2f2f;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
        padding: 8px 20px;
    };
`;

export const SkillsForm = styled.form`
    display:flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding:  12px;
    max-width: 640px;
    width: 100%;
    border-radius: 20px 0 0 20px;
    border: none;
    background: ${({ theme }) => theme.color.thirdColor};

    &:focus {
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const AddButton = styled.button`
    padding: 0 80px;
    border: none;
    border-radius: 0 20px 20px 0;
    background: ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.secondColor};
    transition: 0.3s;
    cursor: pointer;
    min-width: 80px;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 0 20px;
        font-size: 14px;
    };
`;

export const SkillsWrapper = styled.fieldset`
    padding: 20px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.fontMainActive};
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 20px 10px;
    };
`;

export const Legend = styled.legend`
    font-size: 24px;
    padding: 0 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 20px;
    };
`;

export const SkillsContainer = styled.div`
    position: relative;
`;


export const Skill = styled.span`
    background: ${({ theme }) => theme.color.fontMainActive};
    padding: 8px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.mainColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;

export const RemoveSkillButton = styled.button`
    position: absolute;
    border-radius: 50%;
    font-size: 12px;
    background: #ff2d32;
    color: white;
    border: none;
    right: 2px;
    bottom: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #ff6f72;
    }
`;

export const Degree = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const EnglishLevel = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Hobbies = styled.span`
    max-width: 600px;
`;

export const LinkToWebsite = styled.a`

`;

