import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: fit-content;
    margin-top: 6rem;
    margin-left: 18%;
    padding: 4rem;
    border-radius: 48px;

    /* margin-left: calc(50% - 21rem); */
    background-color: ${({ theme }) => theme.colors.contentBg};

    h1 {
        margin: 2rem 0 2rem 0;
        font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2 {
        margin: 0 0 4rem 0;
    }
`;
