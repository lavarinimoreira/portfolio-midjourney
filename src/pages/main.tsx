import { Outlet } from 'react-router-dom';
import EnglishSideBar from '../components/english/side-bar';
import { MainContainer } from '../styles/main';

export default function Main() {
    return (
        <MainContainer>
            <EnglishSideBar />
            <Outlet />
        </MainContainer>
    );
}
