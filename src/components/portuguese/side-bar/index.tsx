import {
    SidebarContainer,
    Avatar,
    TitleLink,
    NavigationLinks,
    HomeNav,
    AboutNav,
    ProjectsNav,
    GalleryNav,
    ContactNav,
} from '../../styles/side-bar';

import { AiOutlineHome, AiFillFolderOpen } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IoMdImages } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import LanguageButton from '../../shared/language-button';

interface SideBarProps {
    toggleLanguage: () => void;
}

function PortugueseSideBar({ toggleLanguage }: SideBarProps) {
    return (
        <SidebarContainer>
            <Avatar src='images/gabriel.jpeg' />
            <TitleLink to='/'>lavarinimoreira.me</TitleLink>
            <LanguageButton toggleLanguage={toggleLanguage} />
            <NavigationLinks>
                <HomeNav to='/'>
                    <span>Início</span> <AiOutlineHome />
                </HomeNav>
                <AboutNav to='/about'>
                    <span>Sobre</span> <HiOutlineInformationCircle />
                </AboutNav>
                <ProjectsNav to='/projects'>
                    <span>Projetos</span> <AiFillFolderOpen />
                </ProjectsNav>
                <GalleryNav to='/gallery'>
                    <span>Galeria</span> <IoMdImages />
                </GalleryNav>
                <ContactNav to='/contact'>
                    <span>Contato</span>
                    <RiContactsLine />
                </ContactNav>
            </NavigationLinks>
        </SidebarContainer>
    );
}

export default PortugueseSideBar;
