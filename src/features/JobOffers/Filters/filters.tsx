import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper, TitleSpan, TitleWrapper } from './styledFilters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { addFilter, toggleFilterList } from './filtersSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const Filters = () => {

    const dispatch = useDispatch();

    const filters = useSelector((state: RootState) => state.filters.filters)
    const xd = useSelector((state: RootState) => state.filters)
    console.log(xd);


    return (
        <FiltersWrapper>
            <TitleWrapper>
                <FilterTitle>Filters</FilterTitle>
                <TitleSpan>(siema)</TitleSpan>
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
                                <ListItemWrapper key={item.id}>
                                    <button onClick={() => dispatch(addFilter(item))}>{item.text}</button>
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