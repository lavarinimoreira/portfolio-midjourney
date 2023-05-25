import { LinkButtonContainer } from './styles';

import { RiExternalLinkLine } from 'react-icons/ri';

interface LinkButtonProps {
    to: string;
    title: string;
}

function LinkButton({ to, title }: LinkButtonProps) {
    return (
        <LinkButtonContainer to={to}>
            {title}
            <RiExternalLinkLine />
        </LinkButtonContainer>
    );
}

export default LinkButton;
