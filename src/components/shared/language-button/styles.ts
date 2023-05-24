import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
        cursor: pointer;
    }

    .en {
        margin: 0 0.6rem 0 0;
    }

    .not-selected {
        opacity: 0.4;
    }

    /* @media (max-width: 750px) {
        .en {
            margin: 0;
        }
    } */
`;
