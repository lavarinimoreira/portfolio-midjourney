import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    background-color: rgba(255, 255, 255, 0.7);
    align-items: center;
    margin: 1em 0 0 0;
    border-radius: 10px 10px 0 0;
    font-weight: 600;

    background-color: ${({ theme }) => theme.colors.background};

    img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin: 1em 0 0 0;

        @media (max-width: 1250px) {
            & {
                width: 150px;
                height: 150px;
            }
        }
    }

    p {
        padding: 8px;
        margin: 0;
        color: ${({ theme }) => theme.colors.pink};
    }

    @media (max-width: 1250px) {
        & {
            width: 180px;
        }
    }
`;
