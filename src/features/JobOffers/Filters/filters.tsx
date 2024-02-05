import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper, SpanCheckBox, TitleSpan, TitleWrapper } from './styledFilters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { switchFilterCheck, toggleFilterList } from './filtersSlice';

export const Filters = () => {

    const dispatch = useDispatch();

    const filters = useSelector((state: RootState) => state.filters.filters)
    const checkedFilters = useSelector((state: RootState) => state.filters.checkedFilters)
    const checkedCount = checkedFilters.filter(item => item.checked).length;



    return (
        <FiltersWrapper>
            <TitleWrapper>
                <FilterTitle>Filters</FilterTitle>
                <TitleSpan>{checkedCount > 0 ? `(${checkedCount})` : ''}</TitleSpan>
            </TitleWrapper>
            {filters.map((filter) => (
                <FilterCategory key={filter.id}>
                    <CategoryWrapper>
                        <div>{filter.title}</div>
                        <Arrow onClick={() => dispatch(toggleFilterList(filter.id))}>{filter.isExpand ? '🡡' : "🡣"}</Arrow>
                    </CategoryWrapper>

                    {filter.isExpand && (
                        <List>
                            {filter.items.map((item) => (
                                <ListItemWrapper key={item.id} onClick={() => dispatch(switchFilterCheck(item.id))}>
                                    <SpanCheckBox
                                        checked={checkedFilters.some(checkedItem => checkedItem.id === item.id && checkedItem.checked)}
                                    />
                                    <span>{item.text}</span>
                                    <FilterCountSpan>(12)</FilterCountSpan>
                                </ListItemWrapper>
                            ))}
                        </List>
                    )}
                </FilterCategory>
            ))
            }
        </FiltersWrapper >
    );
};