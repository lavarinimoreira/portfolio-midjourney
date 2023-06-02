import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    right: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-end; */

    margin: 4rem 4rem 0 0;
`;

export const SystemTime = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 2rem;

    .date {
        margin-bottom: 0.5rem;
    }
`;

export const Computer = styled.img`
    width: 100px;
    height: 100px;

    opacity: 0.8;
    /* transform: rotate(6deg); */

    border: 2px ${({ theme }) => theme.colors.gray400} solid;
    border-radius: 24px;

    padding: 4px;
`;
