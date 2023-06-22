import { ProjectsCard, ProjectsContainer, ProjectsGrid } from '../../styles/projects';
import projectsEnglish from '../../../data/projects.json';

function EnglishProjects() {
    return (
        <ProjectsContainer>
            <h1>Projects</h1>
            <span>Tip: You can click on a project to see more details</span>
            <ProjectsGrid>
                {projectsEnglish.projectsEnglish.map((project) => (
                    <ProjectsCard key={project.id}>
                        <h2>{project.title}</h2>
                        <img src={project.image} />
                        <p>{project.date}</p>
                    </ProjectsCard>
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
    );
}

export default EnglishProjects;
