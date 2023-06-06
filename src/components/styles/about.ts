import styled from 'styled-components';

export const AboutContainer = styled.div`
    position: absolute;
    left: calc(50% - (400px + 6rem));

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 800px;
    height: fit-content;
    margin-top: 6rem;
    /* margin-left: 17%; */
    padding: 4rem 6rem;
    border-radius: 48px;
    background-color: ${({ theme }) => theme.colors.contentBg};

    h1 {
        margin: 2rem 0 0.5rem 0;
        font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2 {
        margin: 0;
    }

    p,
    span {
        margin-bottom: 3rem;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.gray500};
    }

    p {
        margin-top: 1.5rem;
        line-height: 1.5rem;
        text-align: justify;
    }

    .skills {
        margin-bottom: 1rem;
    }

    a {
        font-size: 1.125rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.pink};
        font-weight: 800;
    }

    .resume {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: ${({ theme }) => theme.colors.background};
        margin-bottom: 3rem;

        padding: 1rem;
        border-radius: 8px;
    }

    .download-icon {
        /* color: ${({ theme }) => theme.colors.link}; */
        margin-right: 0.5rem;
    }

    .certifications {
        margin: 0;
    }
`;

export const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    color: ${({ theme }) => theme.colors.gray400};

    margin-bottom: 3rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 16px;

        padding: 0 1rem 0 1rem;

        background-color: ${({ theme }) => theme.colors.background};

        svg {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
    }

    .js {
        svg {
            color: #f0db4f;
        }
    }

    .ts {
        svg {
            color: #007acc;
        }
    }

    .html {
        svg {
            color: #d84924;
        }
    }

    .css {
        svg {
            color: #0066b6;
        }
    }

    .py {
        svg {
            color: #366994;
        }
    }

    .cpp {
        svg {
            color: #9c033a;
        }
    }

    .react {
        svg {
            color: #61dbfb;
        }
    }

    .next {
        svg {
            color: ${({ theme }) => theme.colors.gray600};
        }
    }

    .scss {
        svg {
            color: #c36291;
        }
    }

    .node {
        svg {
            color: #81b640;
        }
    }

    .pgsql {
        svg {
            color: #30628a;
        }
    }

    .git {
        svg {
            color: #e44c30;
        }
    }
`;

export const CertificationsGrid = styled.div`
    margin: 0 0 0 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;
    }
`;
