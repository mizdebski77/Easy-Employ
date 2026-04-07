import { BasicsInformations, EmptyIcon, EmptyState, EmptySub, EmptyTitle, Img, Logo, MainSection, OfferCaptionTitle, OfferCaptionWrapper, OfferTile, OfferTitle, OffersContainer, OffersHeader, OffersTitle, SalaryLabel, SalaryValue, SalaryWrapper, SortSelect, Span, TechStackSpan, TechStackWrapper, TextSection, WorkBadge, Wrapper } from './styledOffers';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { OfferArray } from '../../../core/interface';
import { scrollTop } from '../../../core/scrollTop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import company from '../../../common/Images/SVG/company.svg';
import typeOfWork from '../../../common/Images/SVG/tof.svg';
import location from '../../../common/Images/SVG/location.svg';

export const Offers = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("https://esay-employ-database-wfsz.onrender.com/")
            .then((res: Response) => res.json())
    });

    const filters = useSelector((state: RootState) => state.filters.filters);
    const [sort, setSort] = useState('default');
    const loc = useLocation();

    const urlQuery = new URLSearchParams(loc.search).get('q') || '';

    const filteredOffers = data && filters ? data.filter((offer: OfferArray) => {
        const matchesSearch = !urlQuery ||
            offer.position.toLowerCase().includes(urlQuery.toLowerCase()) ||
            offer.company_name.toLowerCase().includes(urlQuery.toLowerCase()) ||
            offer.skills.some((s: { skill: string }) => s.skill.toLowerCase().includes(urlQuery.toLowerCase()));

        const matchesFilters = filters.every(filter => {
            if (!filter.items.some(item => item.checked)) return true;
            return filter.items.some(item => item.checked && offer.keywords.includes(item.text));
        });

        return matchesSearch && matchesFilters;
    }) : [];

    const sortedOffers = [...(filteredOffers || [])].sort((a: OfferArray, b: OfferArray) => {
        if (sort === 'alpha') return a.position.localeCompare(b.position);
        return 0;
    });

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <Wrapper>
            <OffersHeader>
                <OffersTitle>
                    Showing <Span>{sortedOffers.length}</Span> of {data?.length} offers
                    {urlQuery && <> for "<Span>{urlQuery}</Span>"</>}
                </OffersTitle>
                <SortSelect value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="default">Sort: Default</option>
                    <option value="alpha">Sort: A–Z</option>
                </SortSelect>
            </OffersHeader>

            {sortedOffers.length === 0 ? (
                <EmptyState>
                    <EmptyIcon>🔍</EmptyIcon>
                    <EmptyTitle>No offers found</EmptyTitle>
                    <EmptySub>Try adjusting your filters or search term</EmptySub>
                </EmptyState>
            ) : (
                <OffersContainer>
                    {sortedOffers.map((offer: OfferArray) => (
                        <OfferTile to={`/Offer/${offer.id}`} key={offer.id} onClick={() => scrollTop()}>
                            <MainSection>
                                <Logo src={offer.logo} alt='logo' />
                                <TextSection>
                                    <OfferTitle>{offer.position}</OfferTitle>
                                    <BasicsInformations>
                                        <OfferCaptionWrapper>
                                            <Img src={company} alt='company' />
                                            <OfferCaptionTitle>{offer.company_name}</OfferCaptionTitle>
                                        </OfferCaptionWrapper>
                                        <OfferCaptionWrapper>
                                            <Img src={typeOfWork} alt='work type' />
                                            <WorkBadge workType={offer.work_type}>{offer.work_type}</WorkBadge>
                                        </OfferCaptionWrapper>
                                        <OfferCaptionWrapper>
                                            <Img src={location} alt='location' />
                                            <OfferCaptionTitle>{offer.location}</OfferCaptionTitle>
                                        </OfferCaptionWrapper>
                                    </BasicsInformations>
                                </TextSection>
                                <SalaryWrapper>
                                    <SalaryValue>{offer.gross_salary}</SalaryValue>
                                    <SalaryLabel>gross / year</SalaryLabel>
                                </SalaryWrapper>
                            </MainSection>
                            <TechStackWrapper>
                                {offer.skills.map((skill) => (
                                    <TechStackSpan key={skill.skill}>{skill.skill}</TechStackSpan>
                                ))}
                            </TechStackWrapper>
                        </OfferTile>
                    ))}
                </OffersContainer>
            )}
        </Wrapper>
    );
};
