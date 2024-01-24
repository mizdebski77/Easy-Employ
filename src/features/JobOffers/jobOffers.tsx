import {
    Arrow,
    CaptionsContainer,
    Category,
    ContentWrapper,
    FilterCategory,
    FiltersWrapper,
    Form,
    FormWrapper,
    Input,
    KeyWord,
    KeyWordContainer,
    KeyWordsWrapper,
    Legend,
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
    Option,
    RemoveButton,
    SearchButton,
    ListItemWrapper,
    Select,
    Title,
    Wrapper,
    CategoryWrapper,
    FilterCountSpan,
    FilterTitle,
    InputWrapper,
    AddKeyWordButton,
    KeyWordInput,
} from './styledJobOffers';
import logo from '../../common/Images/logo.png';
import { useState } from 'react';
import { Categories } from './listItems';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { addKeyWord } from './jobOffersSlice';

export const JobOffers = () => {

    const [showMore, setShowMore] = useState(false);
    const [newKeyWord, setNewKeyWord] = useState("");

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const dispatch = useDispatch();


    const keyWords = useSelector((state: RootState) => state.keyWords.keyWords)

    const handleAddKeyWord = () => {
        dispatch(addKeyWord({ newKeyWord }));
    };

    console.log(keyWords);



    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>

            <FormWrapper>
                <Form>
                    <InputWrapper>
                        <KeyWordInput
                            placeholder='Key Words'
                            value={newKeyWord}
                            onChange={({ target }) => setNewKeyWord(target.value)}
                        />
                        <AddKeyWordButton type='button' onClick={handleAddKeyWord}>+</AddKeyWordButton>
                    </InputWrapper>
                    <Input placeholder='Location' />
                    <Select defaultValue='Distance'>
                        <Option disabled value='Distance'>Distance</Option>
                        <Option value=''>+ 30 km</Option>
                        <Option value=''>+ 50 km</Option>
                        <Option value=''>+ 70 km</Option>
                        <Option value=''>+ 100 km</Option>
                    </Select>
                    <SearchButton>Search</SearchButton>
                </Form>

                <KeyWordsWrapper>
                    <Legend>Key words</Legend>
                    {keyWords.map((keyWord, index) => (
                        <KeyWordContainer key={index}>
                            <KeyWord>{keyWord.newKeyWord} </KeyWord>
                            <RemoveButton>x</RemoveButton>
                        </KeyWordContainer>
                    ))}

                </KeyWordsWrapper>
            </FormWrapper>

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
