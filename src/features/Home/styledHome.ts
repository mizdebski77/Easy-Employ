import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(79,142,247,0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(79,142,247,0); }
`;

export const Wrapper = styled.main`
  position: relative;
  z-index: 1;
`;

export const HeroSection = styled.section`
  padding: 90px 54px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.6s ease forwards;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
    padding: 60px 20px 50px;
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderMid};
  border-radius: 99px;
  padding: 6px 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 500;
  margin-bottom: 28px;
  letter-spacing: 0.04em;
`;

export const HeroBadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.green};
  box-shadow: 0 0 8px ${({ theme }) => theme.color.green};
  animation: ${pulse} 2s ease infinite;
`;

export const Title = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.6rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.fontSecond};
  max-width: 820px;
  margin: 0 auto 20px;
`;

export const TitleAccent = styled.em`
  font-style: normal;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.fontMuted};
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.65;
`;

export const SearchBar = styled.div`
  display: flex;
  max-width: 540px;
  margin: 0 auto 60px;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderMid};
  border-radius: 14px;
  padding: 5px;
  transition: 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.fontMain};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentGlow};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 10px 14px;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.color.fontSecond};

  &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const SearchButton = styled.button`
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.fontMain}, ${({ theme }) => theme.color.fontAccent2});
  border: none;
  border-radius: 9px;
  color: #fff;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover { opacity: 0.88; }
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontSecond};
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontSubtle};
  margin-top: 3px;
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%);
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  animation: ${float} 8s ease-in-out infinite;
`;

export const CaptionNumber = styled.span`
  color: ${({ theme }) => theme.color.fontMain};
  font-weight: 700;
`;

export const Captions = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.fontMuted};
`;
