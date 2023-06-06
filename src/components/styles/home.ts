import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: absolute;

    left: calc(50% - 350px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 700px;
    margin-top: 6rem;
    padding: 4rem 0 7rem 0;
    border-radius: 48px;

    background-color: ${({ theme }) => theme.colors.contentBg};

    h1 {
        margin: 2rem 0 2rem 0;
        font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2 {
        margin: 0 0 4rem 0;
    }

    @media (max-width: 1250px) {
        & {
            width: fit-content;
            margin: 6rem 0 0 2rem;
        }
    }

    @media (max-width: 1000px) {
        & {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    @media (max-width: 895px) {
        & {
            margin: 2rem 1rem 0 1rem;
            padding: 1rem;
            text-align: center;
        }

        h1 {
            font-size: ${({ theme }) => theme.fontSize['3xl']};
        }

        h2 {
            font-size: ${({ theme }) => theme.fontSize.base};
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 375px) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;
