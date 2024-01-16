import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const InformationWrapper = styled.main`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
`;

export const PhotoSection = styled.div`
    border: 2px solid ${({ theme }) => theme.color.fontMain};
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
    height: 280px;
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
`;

export const ContentWrapper = styled.div`
    display: grid;
    justify-content: start;
    align-items: center;
    gap: 20px;
`;

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LocationImg = styled.img`
    max-width: 28px;
`;

export const LocationSpan = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const TitleSpan = styled.span`
    font-size: 20px;
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

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;

export const SectionTitle = styled.h2`
    margin-top: 64px;
    text-align: center;
    font-size: 32px;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
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
`;

export const ContactItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ContactSpan = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 20px;
`;

export const ContactInformation = styled.span`

`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const Icon = styled.img`
    max-width: 40px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ExperienceWrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    display: grid;
    gap: 40px;
`;

export const Tile = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};
`;

export const TileTitle = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const ExperienceDate = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const TileSecondTitle = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontSecond};
`;


export const TileDescription = styled.span`
    max-width: 500px;
    text-align: justify;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
`;

export const EducationWrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 64px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    display: grid;
    gap: 40px;
`;

export const Degree = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;
