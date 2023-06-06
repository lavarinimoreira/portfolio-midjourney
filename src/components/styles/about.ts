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

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.link};
    }

    .download-icon {
        /* color: ${({ theme }) => theme.colors.link}; */
        margin-right: 0.5rem;
    }
`;
