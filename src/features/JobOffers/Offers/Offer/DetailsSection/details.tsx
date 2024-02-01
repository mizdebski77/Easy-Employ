import React from 'react';
import { Wrapper, MapSection, Tile, Map, TileTitle, SkillsWrapper, Skill, TextWrapper, SkillLevel, TextSection } from './styledDetails';
import map from '../../../../../common/Images/map.png';
import { OfferArray } from '../../../../../core/interface';
interface BasicInfoProps {
    data: OfferArray
}
export const Details: React.FC<BasicInfoProps> = ({ data }) => {

    const skills = data.skills



    return (
        <Wrapper>
            <div>
                <Tile>
                    <TileTitle>Tech Stack</TileTitle>
                    <SkillsWrapper>
                        {skills.map((skill, index) => (
                            <TextWrapper key={index}>
                                <Skill>{skill.skill}</Skill>
                                <SkillLevel>{skill.level}</SkillLevel>
                            </TextWrapper>
                        ))}
                    </SkillsWrapper>
                </Tile>

                <Tile>
                    <TileTitle>Job description</TileTitle>
                    <TextSection>
                        <p>
                            Zadania:
                        </p>
                        Maksymalizacja wartości dostarczanych przez zespół poprzez zwiększenie zgodności dostarczanych rozwiązań z potrzebami klientów oraz kluczowych interesariuszy
                        Minimalizacja czasu spędzanego przez development nad identyfikacją i adresacją zagadnień procesowych
                        Wypracowywanie przejrzystych celów dla developmentów
                        Tworzenie specyfikacji /definition of done
                        Tworzenie kryteriów akceptacyjnych
                        Współtworzenie scenariuszy testowych
                        Ustalanie priorytetów
                        Ocena wpływu zmian na procesy klienta
                        Upewnienie się, że development skupia prace na osiągnięciu wskazanego celu minimalizując nakłady
                        Upewnienie się, że każde działanie techniczne jest skorelowane ze wskazanymi celami biznesowymi
                        Podejowanie codzienny decyzji o wydaniu oprogramowania w celu poprawy procesów u klienta
                        Zarządzanie problemami i brakami z zapewnieniem płynności procesów u klienta z perspektywy całości procesów (end-2-end)
                        Upewniania się, że wyniki prac developmentu są rozpropagowane wewnątrz organizacji
                        Implementacja wizji i kierunków w postaci wykonywanych przez development zdań
                        Zarządzanie backlogiem obszaru produktu
                        Ocena wpływu na procesy klienta wdrożonych rozwiązań technicznych
                        Analiza procesów u klienta oraz wariantowanie ich implementacji w produkcie, włącznie z przypadkami brzegowymi

                    </TextSection>
                </Tile>
            </div>

            <div>
                <MapSection>
                    <Map src={map} alt='map' />
                </MapSection>
            </div>

        </Wrapper>
    );
};

