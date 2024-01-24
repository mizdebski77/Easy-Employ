import {
    Arrow,
    CaptionsContainer,
    Category,
    ContentWrapper,
    FilterCategory,
    FiltersWrapper,
    List,
    ListCheckbox,
    ListItem,
    Logo,
    MainSection,
    OfferCaptionTContent,
    OfferCaptionTitle,
    OfferCaptionWrapper,
    OfferTile,
    OfferTitle,
    OffersContainer,
    OffersTitle,
    ListItemWrapper,
    Title,
    Wrapper,
    CategoryWrapper,
    FilterCountSpan,
    FilterTitle,
} from './styledJobOffers';
import logo from '../../common/Images/logo.png';
import { useState } from 'react';
import { Categories } from './listItems';
import { FormElement } from './FormElement/formElement';

export const JobOffers = () => {

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>

            <FormElement />


            <OffersContainer>
                <div>
                    <FiltersWrapper>
                        <FilterTitle>Filters</FilterTitle>
                        {Categories.map((category) => (
                            <FilterCategory key={category.id}>
                                <CategoryWrapper>
                                    <Category>{category.title}</Category>
                                    <Arrow onClick={handleShowMore}>{showMore === false ? '🡣' : "🡡"}</Arrow>
                                </CategoryWrapper>
                                {showMore && (
                                    <List>
                                        {category.items.map((item, index) => (
                                            <ListItemWrapper key={index}>
                                                <ListCheckbox
                                                    type='checkbox'
                                                />
                                                <ListItem>{item.text}</ListItem>
                                                <FilterCountSpan>(12)</FilterCountSpan>
                                            </ListItemWrapper>
                                        ))}
                                    </List>
                                )}
                            </FilterCategory>
                        ))}
                    </FiltersWrapper>
                </div>

                <div>
                    <OffersTitle>Offers recommended for you </OffersTitle>
                    <OfferTile>
                        <MainSection>
                            <Logo src={logo} />
                            <OfferTitle>Junior Frontend Developer</OfferTitle>
                        </MainSection>

                        <ContentWrapper>
                            <CaptionsContainer>
                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Sallary:</OfferCaptionTitle>
                                    <OfferCaptionTContent>10 000 - 12 000 zł / brutto</OfferCaptionTContent>
                                </OfferCaptionWrapper>

                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Location:</OfferCaptionTitle>
                                    <OfferCaptionTContent>Warsaw / Poland</OfferCaptionTContent>
                                </OfferCaptionWrapper>

                                <OfferCaptionWrapper>
                                    <OfferCaptionTitle>Type of work:</OfferCaptionTitle>
                                    <OfferCaptionTContent>Remote work</OfferCaptionTContent>
                                </OfferCaptionWrapper>
                            </CaptionsContainer>

                        </ContentWrapper>

                    </OfferTile>
                </div>
            </OffersContainer>
        </Wrapper >
    );
};
