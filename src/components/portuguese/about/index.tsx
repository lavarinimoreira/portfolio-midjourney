import { AboutContainer, CertificationsGrid, SkillContainer } from '../../styles/about';
import { VscDesktopDownload } from 'react-icons/vsc';
import { DiReact, DiPython, DiSass, DiPostgresql, DiGitBranch } from 'react-icons/di';
import { TbBrandTypescript, TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { SiCplusplus, SiNextdotjs, SiNodedotjs } from 'react-icons/si';

import certifications from '../../../data/certifications.json';
import CertificationCard from '../../shared/certification-card';
import LinkButton from '../../shared/link-button';

function PortugueseAbout() {
    return (
        <AboutContainer>
            <h1>Bem vindo</h1>
            <span>{`Meu nome é Gabriel Lavarini. Obrigado pela visita em meu portifólio.`}</span>

            <div className='resume'>
                <h2>Procurando meu currículo?</h2>
                <div>
                    <span className='download-icon'>
                        <VscDesktopDownload />
                    </span>
                    <a href='' download='Gabriel_Lavarini_Resume'>
                        Clique aqui para baixá-lo!
                    </a>
                </div>
            </div>

            <h2>Sobre</h2>
            <p>
                {`Sou um desenvolvedor web front end atualmente em busca de uma oportunidade de trabalho, mas também faço freelancer. Sou formado em Artes pela UFMG e comecei a aprender sobre Programação em 2020, foi amor ao primeiro "Hello World". Em 2021 comecei a programar mais a sério e agora estou no terceiro ano do curso de Análise e Desenvolvimento de Sistemas.`}
            </p>
            <h2 className='skills'>Habilidades</h2>
            <SkillContainer>
                <div className='js'>
                    <TbBrandJavascript />
                    <h3>JavaScript</h3>
                </div>
                <div className='ts'>
                    <TbBrandTypescript />
                    <h3>TypeScript</h3>
                </div>
                <div className='html'>
                    <TbBrandHtml5 />
                    <h3>HTML</h3>
                </div>
                <div className='css'>
                    <TbBrandCss3 />
                    <h3>CSS</h3>
                </div>
                <div className='py'>
                    <DiPython />
                    <h3>Python</h3>
                </div>
                <div className='cpp'>
                    <SiCplusplus />
                    <h3>C++</h3>
                </div>
                <div className='react'>
                    <DiReact />
                    <h3>React</h3>
                </div>
                <div className='next'>
                    <SiNextdotjs />
                    <h3>NextJS</h3>
                </div>
                <div className='scss'>
                    <DiSass />
                    <h3>SCSS</h3>
                </div>
                <div className='node'>
                    <SiNodedotjs />
                    <h3>Node</h3>
                </div>
                <div className='pgsql'>
                    <DiPostgresql />
                    <h3>PostgreSQL</h3>
                </div>
                <div className='git'>
                    <DiGitBranch />
                    <h3>Git</h3>
                </div>
            </SkillContainer>
            <h2>Certificados</h2>

            <span className='certifications'>
                Dica: você pode selecionar uma certificação para vê-la em uma nova aba.
            </span>
            <CertificationsGrid>
                {certifications.certifications.map((certification) => (
                    <CertificationCard
                        key={certification.name}
                        certification={certification.name}
                        image={certification.image}
                        link={certification.link}
                    />
                ))}
            </CertificationsGrid>
            <LinkButton
                backgroundcolor='#4A41C8'
                bghover='#3730A3'
                to='/projects'
                title='Projetos'
            />
        </AboutContainer>
    );
}

export default PortugueseAbout;
