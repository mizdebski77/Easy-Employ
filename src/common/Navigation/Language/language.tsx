import { FlagImg, LanguageItem, Wrapper } from './styledLanguage';
import { languages } from '../../../core/arrays';

export const Language = () => {
    return (
        <Wrapper>
            {languages.map((lang) => (
                <LanguageItem key={lang.text}>
                    <FlagImg src={lang.flag} alt={lang.text} />
                    {lang.text}
                </LanguageItem>
            ))}
        </Wrapper>
    );
};
