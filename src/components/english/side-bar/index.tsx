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

function EnglishSideBar() {
    return (
        <SidebarContainer>
            <Avatar src='images/gabriel.png' />
            <TitleLink to='/'>lavarinimoreira.me</TitleLink>
            <NavigationLinks>
                <HomeNav to='/'>
                    <AiOutlineHome /> <span>Home</span>
                </HomeNav>
                <AboutNav to='/about'>
                    <HiOutlineInformationCircle />
                    <span>About</span>
                </AboutNav>
                <ProjectsNav to='/projects'>
                    <AiFillFolderOpen />
                    <span>Projects</span>
                </ProjectsNav>
                <GalleryNav to='/gallery'>
                    <IoMdImages />
                    <span>Gallery</span>
                </GalleryNav>
                <ContactNav to='/contact'>
                    <RiContactsLine />
                    <span>Contact</span>
                </ContactNav>
            </NavigationLinks>
        </SidebarContainer>
    );
}

export default EnglishSideBar;
