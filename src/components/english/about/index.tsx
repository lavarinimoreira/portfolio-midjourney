import { AboutContainer } from '../../styles/about';
import { VscDesktopDownload } from 'react-icons/vsc';

function EnglishAbout() {
    return (
        <AboutContainer>
            <h1>Welcome</h1>
            <span>{`I'm Gabriel Lavarini`}</span>
            <p>Thank you for taking the time to check out my portfolio.</p>
            <h2>Looking for my resume?</h2>
            <div>
                <span className='download-icon'>
                    <VscDesktopDownload />
                </span>
                <a href='' download='Gabriel_Lavarini_Resume' className='resume'>
                    Click here to download it!
                </a>
            </div>

            <h2>About Me</h2>
            <p>
                {`I'm a full-stack web developer currently looking for a job opportunity, but
                        I also do freelance. I have an academic degree in Arts from UFMG and I
                        started learning about Programming in 2020, it was love at the first "Hello
                        World". In 2021 I started programming more seriously, and now I'am in the
                        third year of a Systems Analysis degree.`}
            </p>
            <h2>Certifications</h2>
            <h2>Skills</h2>
        </AboutContainer>
    );
}

export default EnglishAbout;
