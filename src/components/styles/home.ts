import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: fit-content;
    margin: 4rem 0 0 4rem;
    padding: 2rem;
    border-radius: 48px;

    /* margin-left: calc(50% - 21rem); */
    background-color: ${({ theme }) => theme.colors.contentBg};

    h1 {
        display: inline-block;
    }
`;