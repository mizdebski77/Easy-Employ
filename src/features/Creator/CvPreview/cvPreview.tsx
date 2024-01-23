import React from 'react';
import {
    CVName,
    CVPreview,
    CVSectionTitle,
    CVTitle,
    Clausule,
    ClausuleWrapper,
    ContentSpan,
    ElementsWrapper,
    ExpContent,
    ExpDuration,
    ExpSecondTitle,
    ExpWrapper,
    Link,
    SpanWrapper,
    TextsWrapper,
    TilesWrapper,
    TitleSpan,
    Wrapper
} from './styledCvPreview';

export const CvPreview = () => {
    return (
        <Wrapper>
            <CVPreview>
                <CVTitle>-- CV --</CVTitle>
                <CVName>Marcin Izdebski</CVName>

                <ElementsWrapper>
                    <SpanWrapper>
                        <TitleSpan>E-Mail:</TitleSpan>
                        <ContentSpan>mizdebski123@gmail.com</ContentSpan>
                    </SpanWrapper>
                    <SpanWrapper>
                        <TitleSpan>Date of Birthd:</TitleSpan>
                        <ContentSpan>16.11.1999</ContentSpan>
                    </SpanWrapper>
                    <SpanWrapper>
                        <TitleSpan>Phone:</TitleSpan>
                        <ContentSpan>501375604</ContentSpan>
                    </SpanWrapper>

                    <SpanWrapper>
                        <TitleSpan>Location:</TitleSpan>
                        <ContentSpan>Olkusz</ContentSpan>
                    </SpanWrapper>
                </ElementsWrapper>

                <ElementsWrapper>
                    <CVSectionTitle>Work experience</CVSectionTitle>
                    <TilesWrapper>
                        <ExpWrapper>
                            <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                            <ExpSecondTitle>Freelance</ExpSecondTitle>
                            <ExpContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                            </ExpContent>
                        </ExpWrapper>

                        <ExpWrapper>
                            <TitleSpan>Frontend developer /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                            <ExpSecondTitle>Freelance</ExpSecondTitle>
                            <ExpContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel veritatis quia ipsum explicabo sint ullam beatae obcaecati debitis, molestiae adipisci eligendi? Quam doloremque fugiat at. Repudiandae quas porro sapiente!
                            </ExpContent>
                        </ExpWrapper>
                    </TilesWrapper>
                </ElementsWrapper>

                <ElementsWrapper>
                    <CVSectionTitle>Skills</CVSectionTitle>
                    <TextsWrapper>
                        React, TypeScript, CSS, HTML
                    </TextsWrapper>
                </ElementsWrapper>


                <ElementsWrapper>
                    <CVSectionTitle>Education</CVSectionTitle>
                    <TitleSpan>The Silesian Technical University /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                    <ExpSecondTitle><TitleSpan>Enginerr:</TitleSpan> Electronic & Telecomunication</ExpSecondTitle>
                </ElementsWrapper>

                <ElementsWrapper>
                    <CVSectionTitle>Courses</CVSectionTitle>
                    <TitleSpan>Frontend Developer Course /  <ExpDuration>02.2022 - 02.2023</ExpDuration></TitleSpan>
                    <ExpSecondTitle>YouCode</ExpSecondTitle>
                </ElementsWrapper>

                <ElementsWrapper>
                    <CVSectionTitle>Interests</CVSectionTitle>
                    <TextsWrapper>
                        Learning new technologies, learning foreign languages, hiking, graphic design
                    </TextsWrapper>
                </ElementsWrapper>

                <ElementsWrapper>
                    <CVSectionTitle>Links</CVSectionTitle>
                    <TitleSpan>Portfolio</TitleSpan>
                    <Link>https://mizdebski77.github.io/Homepage/</Link>

                    <TitleSpan>Portfolio</TitleSpan>
                    <Link>https://mizdebski77.github.io/Homepage/</Link>
                </ElementsWrapper>

                <ClausuleWrapper>
                    <CVSectionTitle>Clause</CVSectionTitle>
                    <Clausule> I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to thePersonal Data Protection Act of 10 May
                        2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU)2016/679 of the European Parliament and of the Council of 27 April 2016 on the
                        protection of natural persons with regard tothe processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General
                        Data Protection Regulation)
                    </Clausule>
                </ClausuleWrapper>
            </CVPreview>

        </Wrapper>
    );
};

