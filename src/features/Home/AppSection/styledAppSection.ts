import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 80px 54px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
    text-align: center;
  }
`;

export const ImagesWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
`;

export const MobileImg = styled.img`
  height: 320px;
  object-fit: contain;
  opacity: 0.85;
  filter: drop-shadow(0 20px 60px rgba(79,142,247,0.2));

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    height: 200px;
  }
`;

export const ContentWrapper = styled.div``;

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
  margin-bottom: 20px;
`;

export const Captions = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontMuted};
  line-height: 1.6;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.color.green};
    font-weight: 600;
    flex-shrink: 0;
  }
`;

export const DownloadInformation = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontSubtle};
  margin: 20px 0 16px;
`;

export const StoresIconsWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StoreIcon = styled.img`
  height: 40px;
  opacity: 0.55;
  cursor: pointer;
  transition: 0.2s;
  filter: brightness(2) grayscale(0.4);

  &:hover { opacity: 0.85; }
`;
