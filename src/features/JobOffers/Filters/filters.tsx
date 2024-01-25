import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper } from './styledFilters';
import { Categories } from './listItems';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleFilter } from './filtersSlice';

export const Filters = () => {

    const filters = useSelector((state: RootState) => state.filters.filters)
    const dispatch = useDispatch();

    return (
        <FiltersWrapper>
            <FilterTitle>Filters</FilterTitle>
            {filters.map((filter) => (
                <FilterCategory key={filter.id}>
                    <CategoryWrapper>
                        <div>{filter.title}</div>
                        <Arrow onClick={() => dispatch(toggleFilter(filter.id))}>{filter.isExpand ? '🡡' : "🡣"}</Arrow>
                    </CategoryWrapper>

                    {filter.isExpand && (
                        <List>
                            {filter.items.map((item, index) => (
                                <ListItemWrapper key={index}>
                                    <input
                                        type='checkbox'
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