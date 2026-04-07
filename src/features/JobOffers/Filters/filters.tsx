import { Arrow, CategoryWrapper, ClearBtn, FilterCategory, FilterName, FiltersWrapper, List, ListItemWrapper, SearchIcon, SearchInputFilter, SearchWrapper, SpanCheckBox, TitleSpan, TitleWrapper, Wrapper } from './styledFilters';
import { FilterTitle } from './styledFilters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleFilterChecked, toggleFilterList } from './filtersSlice';
import { useState } from 'react';

export const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters.filters);
    const checkedFiltersCount = useSelector((state: RootState) => state.filters.checkedFiltersCount);
    const [search, setSearch] = useState('');

    const handleClear = () => {
        filters.forEach(f => f.items.forEach(item => { if (item.checked) dispatch(toggleFilterChecked(item.id)); }));
    };

    return (
        <Wrapper>
            <FiltersWrapper>
                <TitleWrapper>
                    <FilterTitle>
                        Filters {checkedFiltersCount > 0 && <TitleSpan>{checkedFiltersCount}</TitleSpan>}
                    </FilterTitle>
                    {checkedFiltersCount > 0 && <ClearBtn onClick={handleClear}>Clear all</ClearBtn>}
                </TitleWrapper>

                <SearchWrapper>
                    <SearchIcon>🔍</SearchIcon>
                    <SearchInputFilter
                        placeholder="Search offers…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </SearchWrapper>

                {filters.map((filter) => (
                    <FilterCategory key={filter.id}>
                        <CategoryWrapper onClick={() => dispatch(toggleFilterList(filter.id))}>
                            <FilterName>{filter.title} ({filter.items.length})</FilterName>
                            <Arrow isOpen={filter.isExpand}>▼</Arrow>
                        </CategoryWrapper>

                        {filter.isExpand && (
                            <List>
                                {filter.items.map((item) => (
                                    <ListItemWrapper
                                        key={item.id}
                                        onClick={() => dispatch(toggleFilterChecked(item.id))}
                                        checked={item.checked}
                                    >
                                        <SpanCheckBox checked={item.checked}>{item.checked ? '✓' : ''}</SpanCheckBox>
                                        <span>{item.text}</span>
                                    </ListItemWrapper>
                                ))}
                            </List>
                        )}
                    </FilterCategory>
                ))}
            </FiltersWrapper>
        </Wrapper>
    );
};
