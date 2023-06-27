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
`;

export const LineBreak = styled.div`
    width: 100%;
    border-top: ${({ theme }) => theme.colors.gray600} solid 1px;
    height: 1px;
    margin-top: 1rem;
`;
