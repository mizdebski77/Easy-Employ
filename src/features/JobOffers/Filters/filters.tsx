import React, { useState } from 'react';
import { Arrow, CategoryWrapper, FilterCategory, FilterCountSpan, FilterTitle, FiltersWrapper, List, ListItemWrapper } from './styledFilters';
import { Categories } from './listItems';

export const Filters = () => {

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <FiltersWrapper>
            <FilterTitle>Filters</FilterTitle>
            {Categories.map((category) => (
                <FilterCategory key={category.id}>
                    <CategoryWrapper>
                        <div>{category.title}</div>
                        <Arrow onClick={handleShowMore}>{showMore === false ? '🡣' : "🡡"}</Arrow>
                    </CategoryWrapper>
                    {showMore && (
                        <List>
                            {category.items.map((item, index) => (
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
            ))}
        </FiltersWrapper>
    );
};