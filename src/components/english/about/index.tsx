import { AboutContainer, CertificationsGrid, SkillContainer } from '../../styles/about';
import { VscDesktopDownload } from 'react-icons/vsc';
import { DiReact, DiPython, DiSass, DiPostgresql, DiGitBranch } from 'react-icons/di';
import { TbBrandTypescript, TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { SiCplusplus, SiNextdotjs, SiNodedotjs } from 'react-icons/si';

import certifications from '../../../data/certifications.json';
import CertificationCard from '../../shared/certification-card';
import LinkButton from '../../shared/link-button';

function EnglishAbout() {
    return (
        <AboutContainer>
            <h1>Welcome</h1>
            <span>{`I'm Gabriel Lavarini. Thank you for taking the time to check out my portfolio.`}</span>

            <div className='resume'>
                <h2>Looking for my resume?</h2>
                <div>
                    <span className='download-icon'>
                        <VscDesktopDownload />
                    </span>
                    <a href='' download='Gabriel_Lavarini_Resume'>
                        Click here to download it!
                    </a>
                </div>
            </div>

            <h2>About Me</h2>
            <p>
                {`I'm a full-stack web developer currently looking for a job opportunity, but
                        I also do freelance. I have an academic degree in Arts from UFMG and I
                        started learning about Programming in 2020, it was love at the first "Hello
                        World". In 2021 I started programming more seriously, and now I'am in the
                        third year of a Systems Analysis degree.`}
            </p>
            <h2 className='skills'>Skills</h2>
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
            <h2>Certifications</h2>

            <span className='certifications'>
                Tip: you can click on a certification to see it in a new tab.
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
                title='Projects'
            />
        </AboutContainer>
    );
}

export default EnglishAbout;
