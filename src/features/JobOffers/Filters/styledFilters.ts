import styled from "styled-components";

export const Wrapper = styled.aside`
  position: sticky;
  top: 88px;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px) {
    position: static;
  }
`;

export const FiltersWrapper = styled.div`
  background: ${({ theme }) => theme.color.bgCard};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 16px;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const FilterTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontSecond};
`;

export const TitleSpan = styled.span`
  font-size: 11px;
  background: ${({ theme }) => theme.color.accentGlow};
  color: ${({ theme }) => theme.color.fontMain};
  padding: 2px 8px;
  border-radius: 99px;
  font-weight: 500;
`;

export const ClearBtn = styled.button`
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontSubtle};
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: 0.2s;

  &:hover { color: ${({ theme }) => theme.color.fontMain}; }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.color.bgCard2};
  border: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 6px;
  transition: 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.fontMain};
  }
`;

export const SearchIcon = styled.span`
  color: ${({ theme }) => theme.color.fontSubtle};
  font-size: 13px;
`;

export const SearchInputFilter = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.color.fontSecond};
  width: 100%;

  &::placeholder { color: ${({ theme }) => theme.color.fontSubtle}; }
`;

export const FilterCategory = styled.div`
  margin-top: 4px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
  transition: 0.2s;
  user-select: none;
`;

export const FilterName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontMuted};

  ${CategoryWrapper}:hover & {
    color: ${({ theme }) => theme.color.fontSecond};
  }
`;

export const Arrow = styled.span<{ isOpen?: boolean }>`
  font-size: 10px;
  color: ${({ theme }) => theme.color.fontSubtle};
  transition: transform 0.2s;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const List = styled.div`
  padding: 4px 0 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ListItemWrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s;
  font-size: 13px;
  color: ${({ checked, theme }) => checked ? theme.color.fontMain : theme.color.fontMuted};
  background: ${({ checked, theme }) => checked ? theme.color.accentGlow : 'transparent'};

  &:hover {
    background: ${({ checked, theme }) => checked ? theme.color.accentGlow : 'rgba(255,255,255,0.04)'};
    color: ${({ checked, theme }) => checked ? theme.color.fontMain : theme.color.fontSecond};
  }
`;

export const SpanCheckBox = styled.div<{ checked: boolean }>`
  width: 15px;
  height: 15px;
  border: 1.5px solid ${({ checked, theme }) => checked ? theme.color.fontMain : theme.color.borderMid};
  border-radius: 4px;
  background: ${({ checked, theme }) => checked ? theme.color.fontMain : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #fff;
  flex-shrink: 0;
  transition: 0.15s;
`;
