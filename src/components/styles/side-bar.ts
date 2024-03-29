import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.main`
    position: fixed;
    display: flex;
    flex-direction: column;
    /* font-family: ${(props) => props.theme.fontFamily.sidebar}; */

    min-height: 100vh;
    width: 21rem;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};

    @media (max-width: 750px) {
        width: 100%;
        min-height: auto;
        position: absolute;
    }
`;

export const Avatar = styled.img`
    margin: 2rem 0 1rem 0;

    border-radius: 50%;
    width: 200px;
    height: 200px;

    align-self: center;
    object-fit: cover;

    @media (max-width: 750px) {
        width: 150px;
        height: 150px;
    }
`;

export const TitleLink = styled(Link)`
    /* font-family: ${({ theme }) => theme.fontFamily.text}; */
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
    margin: 0 0 1rem 0;
`;

export const NavigationLinks = styled.nav`
    display: grid;
    grid-template-columns: auto;
    /* justify-content: center; */

    gap: 0.5rem;
    margin: 1rem auto;
    padding-right: 2rem;
    width: 100%;

    @media (max-width: 750px) {
        grid-template-columns: auto auto;
        gap: 0.8rem;
        padding: 0;
        align-items: center;
        justify-content: center;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-weight: 800;
        font-size: 1rem;

        width: 80%;
        min-height: 2rem;
        border: none;
        border-radius: 0 20px 20px 0;
        transition: background 0.15s, transform 0.15s;
        padding: 0.2rem 1rem;

        transition-duration: 0.15s;
        transition-property: all;

        /* transition: margin 0.3s ease, justify-content 0.3s ease; */

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 750px) {
            border-radius: 20px;
            width: 100px;
            &:hover {
                transform: translateX(0) scale(1.02);
            }
        }

        svg {
            margin-right: 8px;
            margin-left: 8px;
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }

    .active {
        background: ${(props) => props.color};
    }
`;

export const HomeNav = styled(NavLink)`
    background: rgba(124, 45, 18, 0.2);
    color: rgba(124, 45, 18, 1);

    &:hover,
    &.active {
        background: rgba(124, 45, 18, 1);
    }

    svg {
        color: ${({ theme }) => theme.colors.home};
    }
`;
export const AboutNav = styled(NavLink)`
    background-color: rgba(6, 78, 59, 0.2);

    &:hover,
    &.active {
        background-color: rgba(6, 78, 59, 1);
    }

    svg {
        color: rgb(16 185 129);
    }
`;
export const ProjectsNav = styled(NavLink)`
    background-color: rgba(55, 48, 163, 0.2);

    &:hover,
    &.active {
        background-color: rgba(55, 48, 163, 1);
    }

    svg {
        color: rgb(129 140 248);
    }
`;

export const GalleryNav = styled(NavLink)`
    background-color: rgba(136, 19, 55, 0.2);
    &:hover,
    &.active {
        background-color: rgba(136, 19, 55, 1);
    }

    svg {
        color: rgb(244 63 94);
    }
`;
export const ContactNav = styled(NavLink)`
    background-color: rgba(113, 63, 18, 0.2);

    &:hover,
    &.active {
        background-color: rgba(113, 63, 18, 1);
    }

    svg {
        color: rgb(234 179 8);
    }
`;
