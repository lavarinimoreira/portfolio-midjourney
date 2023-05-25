import { Container } from './styles';

import { useContext } from 'react';
import LanguageContext, { languages } from '../../../contexts/language-context';

interface LanguageSelectorProps {
    toggleLanguage: () => void;
}

function LanguageButton({ toggleLanguage }: LanguageSelectorProps) {
    const language = useContext(LanguageContext);

    return (
        <Container>
            <span
                onClick={toggleLanguage}
                className={language === languages.english ? 'en' : 'en not-selected'}
            >
                EN
            </span>
            <span
                onClick={toggleLanguage}
                className={language === languages.portuguese ? '' : 'not-selected'}
            >
                PT
            </span>
        </Container>
    );
}

export default LanguageButton;
