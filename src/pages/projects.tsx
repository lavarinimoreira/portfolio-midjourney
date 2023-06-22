import { useContext } from 'react';

import LanguageContext, { languages } from '../contexts/language-context';

import EnglishProjects from '../components/english/projects';
import PortugueseProjects from '../components/portuguese/projects';

export default function ProjectsPage() {
    const language = useContext(LanguageContext);

    return language === languages.english ? <EnglishProjects /> : <PortugueseProjects />;
}
