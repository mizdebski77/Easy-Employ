import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper } from './styledFilters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { toggleFilterList } from './filtersSlice';

export const Filters = () => {

    const filters = useSelector((state: RootState) => state.filters.filters)
    const filterList = useSelector((state: RootState) => state.filters.filtersList)
    const dispatch = useDispatch();

    console.log(filterList);


    return (
        <FiltersWrapper>
            <FilterTitle>Filters</FilterTitle>
            {filters.map((filter) => (
                <FilterCategory key={filter.id}>
                    <CategoryWrapper>
                        <div>{filter.title}</div>
                        <Arrow onClick={() => dispatch(toggleFilterList(filter.id))}>{filter.isExpand ? '🡡' : "🡣"}</Arrow>
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