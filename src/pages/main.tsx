import { Outlet } from 'react-router-dom';
import EnglishSideBar from '../components/english/side-bar';
import { MainContainer } from '../styles/main';
import LanguageContext, { languages } from '../contexts/language-context';
import useLanguage from '../hooks/useLanguage';
import PortugueseSideBar from '../components/portuguese/side-bar';

export default function Main() {
    const [language, setLanguage] = useLanguage(
        'language',
        navigator.language === 'pt-BR' ? languages.portuguese : languages.english,
    );

    const toggleLanguage = () => {
        language === languages.english
            ? setLanguage(languages.portuguese)
            : setLanguage(languages.english);
    };

    return (
        <MainContainer>
            <LanguageContext.Provider value={language}>
                {language === languages.english ? (
                    <EnglishSideBar toggleLanguage={toggleLanguage} />
                ) : (
                    <PortugueseSideBar toggleLanguage={toggleLanguage} />
                )}

                <Outlet />
            </LanguageContext.Provider>
        </MainContainer>
    );
}
