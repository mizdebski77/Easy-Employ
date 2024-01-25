import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper } from './styledFilters';
import { Categories } from './listItems';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleFilter } from './filtersSlice';

export const Filters = () => {

    const filters = useSelector((state: RootState) => state.filters.filters)
    const dispatch = useDispatch();

    console.log(filters);

    return (
        <FiltersWrapper>
            <FilterTitle>Filters</FilterTitle>
            {filters.map((filter) => (
                <FilterCategory key={filter.id}>
                    <CategoryWrapper>
                        <div>{filter.title}</div>
                        <Arrow onClick={() => dispatch(toggleFilter(filter.id))}>remove</Arrow>
                    </CategoryWrapper>
                </FilterCategory>
            ))
            }
        </FiltersWrapper >
    );
};