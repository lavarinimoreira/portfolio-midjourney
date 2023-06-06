import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButtonContainer = styled(Link)`
    display: flex;
    align-items: center;

    font-family: ${(props) => props.theme.fontFamily.sidebar};
    font-weight: 500;
    font-size: 1rem;

    width: fit-content;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.buttonBg};

    padding: 1rem 1.5rem;
    border-radius: 24px;
    cursor: pointer;

    svg {
        margin: 0 0 0 0.3rem;
    }

    transition: background 0.15s, transform 0.15s;
    &:hover {
        background: ${({ theme }) => theme.colors.buttonHover};
    }
`;
