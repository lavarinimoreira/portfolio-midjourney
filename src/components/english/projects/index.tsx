import { LineBreak, ProjectsCard, ProjectsContainer, ProjectsGrid } from '../../styles/projects';
import projectsEnglish from '../../../data/projects.json';

function EnglishProjects() {
    return (
        <ProjectsContainer>
            <h1>Projects</h1>
            <LineBreak />
            <ProjectsGrid>
                {projectsEnglish.projectsEnglish.map((project) => (
                    <ProjectsCard key={project.id}>
                        <h2>{project.title}</h2>
                        <img src={project.image} />
                        <p>{project.date}</p>
                        <p>{project.description}</p>
                        <h3>Links:</h3>
                        <ul>
                            <li>
                                <a href={project.web} target='_blank' rel='noreferrer'>
                                    Site - {project.webTitle}
                                </a>
                            </li>
                            <li>
                                <a href={project.git} target='_blank' rel='noreferrer'>
                                    GitHub - {project.id}
                                </a>
                            </li>
                        </ul>
                        <LineBreak />
                    </ProjectsCard>
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
    );
}

export default EnglishProjects;
