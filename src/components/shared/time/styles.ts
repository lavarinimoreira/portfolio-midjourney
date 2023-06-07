import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    right: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-end; */

    margin: 4rem 4rem 0 0;

    @media (max-width: 1400px) {
        display: none;
    }
`;

export const SystemTime = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fontFamily.text};

    margin-right: 2rem;

    .date {
        margin-bottom: 0.5rem;
    }
`;
