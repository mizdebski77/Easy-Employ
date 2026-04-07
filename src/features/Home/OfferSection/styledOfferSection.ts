import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
  padding: 0 54px 80px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    padding: 0 20px 60px;
  }
`;

export const SectionLabel = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.fontMain};
  margin-bottom: 8px;
`;

export const OffersTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 28px;
`;

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

export const OfferTile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.22s;
  animation: ${fadeUp} 0.4s ease forwards;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
    opacity: 0;
    transition: 0.22s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.borderMid};
    transform: translateX(6px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  }

  &:hover::before { opacity: 1; }
`;

export const OfferLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  object-fit: contain;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  padding: 4px;
  flex-shrink: 0;
`;

export const OfferArticle = styled.div`
  flex: 1;
  min-width: 0;
`;

export const OfferTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 3px;
`;

export const OfferDetails = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const OfferRight = styled.div`
  text-align: right;
  flex-shrink: 0;
`;

export const WorkTypeBadge = styled.span<{ workType?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 500;
  background: ${({ workType, theme }) =>
    workType === 'Remote' ? 'rgba(79,142,247,0.12)' :
    workType === 'On-site' ? theme.color.amberBg :
    theme.color.greenBg};
  color: ${({ workType, theme }) =>
    workType === 'Remote' ? theme.color.fontMain :
    workType === 'On-site' ? theme.color.amber :
    theme.color.green};
`;

export const SalaryText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontSubtle};
  margin-top: 4px;
`;

export const AllOffersButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: 0.22s;

  &:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,142,247,0.35); }
`;
