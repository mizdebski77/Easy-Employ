import { AppImg, AppTitle, AppWrapper, IformationsWrapper, InformationAppWrapper, InformationLink, InformationsLinksWrapper, Logo, LogoDot, LogoFirstLetters, LogoTagline, LogoText, LogoWrapper, MainSection, SocialLink, ToolsLink, ToolsLinksWrapper, ToolsTitle, ToolsWrapper, Wrapper } from './styledFooter';
import app from '../Images/Home/app.png';
import google from '../Images/Home/google.png';
import { scrollTop } from '../../core/scrollTop';
import { footerLinks, links, socials } from '../../core/arrays';

export const Footer = () => {
    return (
        <Wrapper>
            <MainSection>
                <div>
                    <LogoWrapper to='/Home'>
                        <LogoDot />
                        <LogoText>
                            <LogoFirstLetters>Easy</LogoFirstLetters> Employ
                        </LogoText>
                    </LogoWrapper>
                    <LogoTagline>Find your next IT opportunity in Poland and beyond.</LogoTagline>
                </div>

                <ToolsWrapper>
                    <ToolsTitle>Tools</ToolsTitle>
                    <ToolsLinksWrapper>
                        {links.map((link, index) => (
                            <ToolsLink key={index} to={link.link} onClick={() => scrollTop()}>{link.text}</ToolsLink>
                        ))}
                    </ToolsLinksWrapper>
                </ToolsWrapper>

                <AppWrapper>
                    <AppTitle>Download the app</AppTitle>
                    <AppImg src={app} />
                    <AppImg src={google} />
                </AppWrapper>
            </MainSection>

            <IformationsWrapper>
                {footerLinks.map((footerLink) => (
                    <InformationsLinksWrapper key={footerLink}>
                        <InformationLink>{footerLink}</InformationLink>
                    </InformationsLinksWrapper>
                ))}
                <InformationAppWrapper>
                    {socials.map((image) => (
                        <SocialLink key={image.text} src={image.path} alt={image.text} />
                    ))}
                </InformationAppWrapper>
            </IformationsWrapper>
        </Wrapper>
    );
};
