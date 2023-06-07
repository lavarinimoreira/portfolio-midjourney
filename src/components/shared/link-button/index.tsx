import { LinkButtonContainer } from './styles';

import { RiExternalLinkLine } from 'react-icons/ri';

interface LinkButtonProps {
    to: string;
    title: string;
    backgroundcolor: string;
    bghover: string;
}

function LinkButton({ to, title, backgroundcolor, bghover }: LinkButtonProps) {
    return (
        <LinkButtonContainer backgroundcolor={backgroundcolor} bghover={bghover} to={to}>
            {title}
            <RiExternalLinkLine />
        </LinkButtonContainer>
    );
}

export default LinkButton;
