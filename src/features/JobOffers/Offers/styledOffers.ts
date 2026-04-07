import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div``;

export const OffersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 12px;
  flex-wrap: wrap;
`;

export const OffersTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const Span = styled.strong`
  color: ${({ theme }) => theme.color.fontSecond};
  font-weight: 500;
`;

export const SortSelect = styled.select`
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.color.fontMuted};
  outline: none;
  cursor: pointer;
`;

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OfferTile = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px;
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.22s;
  animation: ${fadeUp} 0.35s ease forwards;
  position: relative;
  overflow: hidden;

  &::after {
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
    transform: translateX(4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  }

  &:hover::after { opacity: 1; }
`;

export const MainSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: contain;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  padding: 4px;
  flex-shrink: 0;
`;

export const TextSection = styled.div`
  flex: 1;
  min-width: 0;
`;

export const OfferTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 6px;
`;

export const BasicsInformations = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const OfferCaptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
  opacity: 0.5;
  filter: invert(1);
`;

export const OfferCaptionTitle = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const SalaryWrapper = styled.div`
  margin-left: auto;
  text-align: right;
  flex-shrink: 0;
`;

export const SalaryValue = styled.p`
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.green};
`;

export const SalaryLabel = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.color.fontSubtle};
`;

export const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechStackSpan = styled.span`
  padding: 3px 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 99px;
  font-size: 11px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const WorkBadge = styled.span<{ workType?: string }>`
  display: inline-flex;
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${({ theme }) => theme.color.fontMuted};
`;

export const EmptyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 12px;
`;

export const EmptyTitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.color.fontSecond};
  margin-bottom: 6px;
`;

export const EmptySub = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.fontMuted};
`;
