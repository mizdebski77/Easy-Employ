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
    Logo,
    MainSection,
    OfferCaptionTContent,
    OfferCaptionTitle,
    OfferCaptionWrapper,
    OfferTile,
    OfferTitle,
    OffersContainer,
    OffersTitle,
    OffersWrapper,
    Option,
    RemoveButton,
    SearchButton,
    Select,
    Title,
    Wrapper
} from './styledJobOffers';
import logo from '../../common/Images/logo.png';

export const JobOffers = () => {


    return (
        <Wrapper>
            <Title>
                What kind of job are you looking for?
            </Title>

            <FormWrapper>
                <Form>
                    <Input placeholder='Key Words' />
                    <Input placeholder='Location' />
                    <Select>
                        <Option selected disabled value='Distance'>Distance</Option>
                        <Option value=''>+ 30 km</Option>
                        <Option value=''>+ 50 km</Option>
                        <Option value=''>+ 70 km</Option>
                        <Option value=''>+ 100 km</Option>
                    </Select>
                    <SearchButton>Search</SearchButton>
                </Form>

                <KeyWordsWrapper>
                    <Legend>Key words</Legend>
                    <KeyWordContainer>
                        <KeyWord>Frontend </KeyWord>
                        <RemoveButton>x</RemoveButton>
                    </KeyWordContainer>
                </KeyWordsWrapper>
            </FormWrapper>

            <OffersContainer>

                <FiltersWrapper>
                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>
                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>

                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>

                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>
                    
                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>
                    <FilterCategory>
                        <Category>Poziom stanowiska</Category>
                        <Arrow>🡣</Arrow>
                    </FilterCategory>
                </FiltersWrapper>


                <OffersWrapper>
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
                </OffersWrapper>
            </OffersContainer>

        </Wrapper>
    );
};
