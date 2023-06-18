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
        margin: 2rem 0 1rem 0;
        font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2 {
        margin: 0 0 4rem 0;
        color: ${({ theme }) => theme.colors.pink};
    }

    @media (max-width: 1373px) {
        & {
            margin: 6rem 0 0 10.5rem;
        }
    }

    @media (max-width: 1045px) {
        & {
            width: 600px;
            margin-left: 13.5rem;
        }
    }

    @media (max-width: 954px) {
        & {
            margin-left: 23rem;
            padding: 0 2rem 2rem 2rem;
            text-align: center;
            width: 260px;
        }

        h1 {
            font-size: ${({ theme }) => theme.fontSize['3xl']};
        }

        h2 {
            font-size: ${({ theme }) => theme.fontSize.base};
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 750px) {
        margin-top: 30rem;
        margin-left: 0;

        left: calc(50% - 162px);
    }

    @media (max-width: 375px) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;
