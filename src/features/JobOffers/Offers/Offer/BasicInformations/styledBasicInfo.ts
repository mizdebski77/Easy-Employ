import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
`;

export const TitleImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: contain;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  padding: 6px;
  flex-shrink: 0;
`;

export const Position = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 4px;
`;

export const CompanyName = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const InformationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfomrationsContainer = styled.div`
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InformationImg = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.5;
  filter: invert(1);
  flex-shrink: 0;
`;

export const TextWrapper = styled.div``;

export const InformationTitle = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.fontSubtle};
  margin-bottom: 4px;
`;

export const InformationSpan = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontSecond};
`;
