import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ProjectDetailsPage from './pages/project-details';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';

import NotFoundPage from './pages/not-found'; // custom error page component

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/projects/:id' element={<ProjectDetailsPage />} />
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} /> {/* Catch-all route for unknown paths */}
        </Routes>
    );
}
