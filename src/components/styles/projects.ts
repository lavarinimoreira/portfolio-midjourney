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
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(1, 1fr);
`;

export const ProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(55, 48, 163, 0.2);
    border: 8px solid black;
    border-radius: 24px;

    padding: 0 2rem;

    img {
        width: 600px;
        height: 310px;
    }
`;
