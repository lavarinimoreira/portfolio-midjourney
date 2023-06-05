import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;
