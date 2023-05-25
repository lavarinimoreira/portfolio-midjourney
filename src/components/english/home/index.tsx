import LinkButton from '../../shared/link-button';
import { HomeContainer } from '../../styles/home';

function EnglishHome() {
    return (
        <HomeContainer>
            <h1>Gabriel Lavarini</h1>
            <h2>{`> web developer, editor and artist`} </h2>
            <LinkButton to='/about' title='See more' />
        </HomeContainer>
    );
}

export default EnglishHome;
