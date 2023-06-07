import LinkButton from '../../shared/link-button';
import { HomeContainer } from '../../styles/home';

function EnglishHome() {
    return (
        <HomeContainer>
            <h1>Gabriel Lavarini</h1>
            <h2>{`> web developer, editor and artist`} </h2>
            <LinkButton backgroundcolor='#047857' bghover='#065f46' to='/about' title='See more' />
        </HomeContainer>
    );
}

export default EnglishHome;
