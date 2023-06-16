import LinkButton from '../../shared/link-button';
import { HomeContainer } from '../../styles/home';

function EnglishHome() {
    return (
        <HomeContainer>
            <h1>Gabriel Lavarini</h1>
            <h2>{`> Desenvolvedor, editor e artista`} </h2>
            <LinkButton backgroundcolor='#047857' bghover='#065f46' to='/about' title='Ver mais' />
        </HomeContainer>
    );
}

export default EnglishHome;
