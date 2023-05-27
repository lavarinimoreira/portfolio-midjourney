import LinkButton from '../../shared/link-button';
import { HomeContainer } from '../../styles/home';

function EnglishHome() {
    return (
        <HomeContainer>
            <h1>Gabriel Lavarini</h1>
            <h2>{`> Desenvolvedor web, editor e artista`} </h2>
            <LinkButton to='/about' title='Ver mais' />
        </HomeContainer>
    );
}

export default EnglishHome;
