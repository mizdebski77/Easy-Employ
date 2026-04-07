import { GlowOrb, HeroBadge, HeroBadgeDot, HeroSection, SearchBar, SearchButton, SearchInput, StatItem, StatLabel, StatValue, StatsRow, Subtitle, Title, TitleAccent, Wrapper } from './styledHome';
import { OfferSection } from './OfferSection/offerSection';
import { CarrerSection } from './CarrerSection/carrerSection';
import { AppSection } from './AppSection/appSection';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Home = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("https://esay-employ-database-wfsz.onrender.com")
            .then((res: Response) => res.json())
    });

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/Offers?q=${encodeURIComponent(search)}`);
        } else {
            navigate('/Offers');
        }
    };

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <>
                    <HeroSection>
                        <GlowOrb />
                        <HeroBadge>
                            <HeroBadgeDot />
                            {data?.length} active IT offers this week
                        </HeroBadge>
                        <Title>
                            Find Your Next<br /><TitleAccent>Dream IT Job</TitleAccent>
                        </Title>
                        <Subtitle>
                            Browse hundreds of IT opportunities in Poland and beyond. Connect with top tech companies and land the role you deserve.
                        </Subtitle>
                        <SearchBar>
                            <SearchInput
                                placeholder="Search jobs, companies, skills…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                            />
                            <SearchButton onClick={handleSearch}>Search →</SearchButton>
                        </SearchBar>
                        <StatsRow>
                            <StatItem>
                                <StatValue>{data?.length}+</StatValue>
                                <StatLabel>Active offers</StatLabel>
                            </StatItem>
                            <StatItem>
                                <StatValue>120+</StatValue>
                                <StatLabel>Companies hiring</StatLabel>
                            </StatItem>
                            <StatItem>
                                <StatValue>94%</StatValue>
                                <StatLabel>Placement rate</StatLabel>
                            </StatItem>
                        </StatsRow>
                    </HeroSection>

                    <OfferSection data={data} />
                    <CarrerSection />
                    <AppSection />
                </>
            )}
        </Wrapper>
    );
};
