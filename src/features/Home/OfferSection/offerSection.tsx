import { AllOffersButton, OfferArticle, OfferDetails, OfferLogo, OfferRight, OfferTile, OfferTitle, OfferWrapper, OffersTitle, SalaryText, SectionLabel, Wrapper, WorkTypeBadge } from './styledOfferSection';
import { scrollTop } from '../../../core/scrollTop';
import { OfferArray } from '../../../core/interface';

interface OfferSectionProps { data: OfferArray[]; }

export const OfferSection: React.FC<OfferSectionProps> = ({ data }) => {
    const preview = data?.slice(0, 6) || [];
    return (
        <Wrapper>
            <SectionLabel>Hot right now</SectionLabel>
            <OffersTitle>Latest Offers</OffersTitle>
            <OfferWrapper>
                {preview.map((offer: OfferArray) => (
                    <OfferTile to={`/Offer/${offer.id}`} key={offer.id} onClick={() => scrollTop()}>
                        <OfferLogo src={offer.logo} alt={offer.company_name} />
                        <OfferArticle>
                            <OfferTitle>{offer.position}</OfferTitle>
                            <OfferDetails>{offer.company_name} · {offer.location}</OfferDetails>
                        </OfferArticle>
                        <OfferRight>
                            <WorkTypeBadge workType={offer.work_type}>{offer.work_type}</WorkTypeBadge>
                            <SalaryText>{offer.gross_salary}</SalaryText>
                        </OfferRight>
                    </OfferTile>
                ))}
            </OfferWrapper>
            <AllOffersButton to='/Offers' onClick={() => scrollTop()}>View all offers →</AllOffersButton>
        </Wrapper>
    );
};
