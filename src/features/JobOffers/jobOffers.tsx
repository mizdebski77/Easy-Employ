import {
    CaptionsContainer,
    ContentWrapper,
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
                Job Offers
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


            <OffersWrapper>
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
        </Wrapper>
    );
};
