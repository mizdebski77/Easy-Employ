import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.bgCard};
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
  padding: 80px 54px;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.fontMain};
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 36px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 16px;
  padding: 24px 28px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ProfileImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`;

export const TextWrapper = styled.div``;

export const ProfileTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 6px;
`;

export const ProfileSpan = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
  margin-bottom: 3px;

  &::before { content: '✓ '; color: ${({ theme }) => theme.color.green}; }
`;

export const ProfileLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s;
  white-space: nowrap;

  &:hover { opacity: 0.88; transform: translateY(-2px); }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
    grid-template-columns: 1fr;
  }
`;

export const CarrerTile = styled.div`
  background: ${({ theme }) => theme.color.bgCard3};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 16px;
  overflow: hidden;
  transition: 0.22s;

  &:hover {
    border-color: ${({ theme }) => theme.color.borderMid};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4);
  }
`;

export const CarrerImg = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  opacity: 0.6;
  display: block;
`;

export const TextContainer = styled.div`
  padding: 16px 18px 12px;
`;

export const TileTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 6px;
`;

export const TileSpan = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
  line-height: 1.5;
`;

export const TileLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 4px 18px 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontMain};
  text-decoration: none;
  transition: 0.2s;

  &:hover { gap: 10px; }
`;
