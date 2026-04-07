import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 54px;
  position: relative;
  z-index: 1;

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
  margin-bottom: 28px;
`;

export const OffersContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
    grid-template-columns: 1fr;
  }
`;
