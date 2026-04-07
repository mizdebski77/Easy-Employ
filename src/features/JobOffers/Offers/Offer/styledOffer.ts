import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 54px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    padding: 20px 16px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
  cursor: pointer;
  margin-bottom: 24px;
  padding: 7px 14px;
  border-radius: 8px;
  transition: 0.2s;
  border: none;
  background: transparent;
  font-family: 'DM Sans', sans-serif;

  &:hover { color: ${({ theme }) => theme.color.fontSecond}; background: rgba(255,255,255,0.05); }
`;

export const ContentWrapper = styled.div``;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 20px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
    grid-template-columns: 1fr;
  }
`;
