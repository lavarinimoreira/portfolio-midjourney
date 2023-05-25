import { LinkButtonContainer } from './styles';

interface LinkButtonProps {
    to: string;
    title: string;
}

function LinkButton({ to, title }: LinkButtonProps) {
    return <LinkButtonContainer to={to}>{title}</LinkButtonContainer>;
}

export default LinkButton;
