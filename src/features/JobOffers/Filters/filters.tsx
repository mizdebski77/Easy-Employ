import { Arrow, CategoryWrapper, FilterCategory, FilterName, FilterTitle, FiltersWrapper, List, ListItemWrapper, SpanCheckBox, TitleSpan, TitleWrapper, Wrapper } from './styledFilters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleFilterChecked, toggleFilterList } from './filtersSlice';

export const Filters = () => {

    const dispatch = useDispatch();

    const filters = useSelector((state: RootState) => state.filters.filters)
    const checkedFiltersCount = useSelector((state: RootState) => state.filters.checkedFiltersCount)

    return (
        <Wrapper>
            <FiltersWrapper>
                <TitleWrapper>
                    <FilterTitle>Filters</FilterTitle>
                    <TitleSpan>{checkedFiltersCount > 0 ? `(${checkedFiltersCount})` : ''}</TitleSpan>
                </TitleWrapper>


                {filters.map((filter) => (
                    <FilterCategory key={filter.id}>
                        <CategoryWrapper>
                            <FilterName> {`${filter.title} (${filter.items.length})`} </FilterName>
                            <Arrow onClick={() => dispatch(toggleFilterList(filter.id))}>{filter.isExpand ? '🡡' : "🡣"}</Arrow>
                        </CategoryWrapper>

                        {filter.isExpand && (
                            <List>
                                {filter.items.map((item) => (
                                    <ListItemWrapper
                                        key={item.id}
                                        onClick={() => dispatch(toggleFilterChecked(item.id))}
                                        checked={item.checked}
                                    >
                                        <SpanCheckBox
                                            checked={item.checked}
                                        >
                                            {item.checked
                                                ? '✔' : ''}
                                        </SpanCheckBox>
                                        <span>{item.text}</span>
                                    </ListItemWrapper>
                                ))}
                            </List>
                        )}
                    </FilterCategory>
                ))}
            </FiltersWrapper >
        </Wrapper>

    );
};