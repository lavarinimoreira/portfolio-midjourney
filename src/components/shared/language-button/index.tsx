import { useState } from 'react';
import { Container } from './styles';

function LanguageButton() {
    const [lang, setLang] = useState('en-US');

    const handleEnglish = () => {
        setLang('en-US');
    };

    const handlePortuguese = () => {
        setLang('pt-BR');
    };

    return (
        <Container>
            <span onClick={handleEnglish} className={lang === 'en-US' ? 'en' : 'en not-selected'}>
                EN
            </span>
            <span onClick={handlePortuguese} className={lang === 'pt-BR' ? '' : 'not-selected'}>
                PT
            </span>
        </Container>
    );
}

export default LanguageButton;
