import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    position: absolute;
    left: calc(50% - (400px + 6rem));

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 800px;
    height: fit-content;
    margin-top: 6rem;
    margin-bottom: 5rem;
    padding: 4rem 6rem;
    border-radius: 48px;
    background-color: ${({ theme }) => theme.colors.contentBg};

    h1 {
        margin: 0 0 0.5rem 0;
        font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2 {
        margin: 3rem 0 1rem 0;
    }

    h3 {
        margin: 1rem 0 0 0;
    }

    a {
        text-decoration: none;
        line-height: 1.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.pink};
    }

    p {
        margin: 0;
        line-height: 1.5rem;
        text-align: justify;
        color: ${({ theme }) => theme.colors.gray500};
    }

    @media (max-width: 1700px) {
        & {
            margin-left: 10.5rem;
        }
    }

    @media (max-width: 1350px) {
        & {
            padding: 2rem 3rem;
            margin-left: 13.5rem;
        }
    }

    @media (max-width: 1255px) {
        & {
            width: 600px;
            margin-left: 19.75rem;
        }
    }

    @media (max-width: 1055px) {
        & {
            width: 400px;
            margin-left: 26rem;
        }
    }

    @media (max-width: 850px) {
        & {
            padding: 2rem 2rem;
            margin-left: 28.5rem;
            h1 {
                font-size: ${({ theme }) => theme.fontSize['3xl']};
            }

            h2 {
                font-size: ${({ theme }) => theme.fontSize.lg};
            }

            p {
                font-size: ${({ theme }) => theme.fontSize.base};
            }
        }
    }

    @media (max-width: 750px) {
        & {
            width: 290px;
            margin-top: 30rem;
            margin-left: 0;

            text-align: center;

            left: calc(50% - 177px);

            p {
                width: 75%;
            }
        }
    }
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(1, 1fr);
`;

export const ProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    img {
        width: 600px;
        height: 310px;
    }

    @media (max-width: 1055px) {
        & {
            width: 400px;
            margin-left: 26rem;
            img {
                width: 300px;
                height: 155px;
            }
            margin: 0;
        }
    }
`;

export const LineBreak = styled.div`
    width: 100%;
    border-top: ${({ theme }) => theme.colors.gray600} solid 1px;
    height: 1px;
    margin-top: 1rem;

    @media (max-width: 750px) {
        width: 75%;
    }
`;
