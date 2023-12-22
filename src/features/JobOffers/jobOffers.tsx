import {
    Form,
    FormWrapper,
    Input,
    KeyWord,
    KeyWordContainer,
    KeyWordsWrapper,
    Legend,
    OfferSallary,
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
                        <KeyWord>Frontend developer</KeyWord>
                        <RemoveButton>x</RemoveButton>
                    </KeyWordContainer>
                </KeyWordsWrapper>
            </FormWrapper>


            <OffersWrapper>
                <OfferTile>
                    <OfferTitle>Junior Frontend Developer</OfferTitle>
                    <OfferSallary>10 000 - 12 000 zł</OfferSallary>
                </OfferTile>
            </OffersWrapper>
        </Wrapper>
    );
};
